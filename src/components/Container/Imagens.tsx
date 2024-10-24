import { useState, useEffect } from 'react';
import { Ancora, Autor, ButtonLink, ButtonsCategories, Categories, ContainerButtons, Picture, PictureContainer, Title } from './images';

const Imagens = () => {
    const [images, setImages] = useState<{ id: string; author: string; download_url: string; url: string; category: string }[]>([]);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('all'); // Estado para a categoria selecionada


    // Função simulada para adicionar uma categoria a cada imagem
    const addCategoriesToImages = (data: unknown[]) => {
        // Categorias simuladas
        const categories = ['nature', 'tech', 'people'];
        return data.map((image: unknown) => ({
            ...image,
            category: categories[Math.floor(Math.random() * categories.length)] // Adiciona uma categoria aleatória
        }));
    };

    const fetchImages = async () => {
        try {
            const response = await fetch('https://picsum.photos/v2/list');
            const data = await response.json();
            const categorizedData = addCategoriesToImages(data); // Adiciona categorias
            setImages(categorizedData); // Armazena o array completo de objetos de imagem
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar as imagens:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Função para filtrar as imagens com base na categoria selecionada
    const filteredImages = category === 'all'
        ? images
        : images.filter(image => image.category === category);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Title>Seção de fotos</Title>

            {/* Botões para selecionar a categoria */}
            <ContainerButtons>
                <h3>Escolha uma categoria</h3>
                <ButtonsCategories onClick={() => setCategory('all')}>Todos</ButtonsCategories>
                <ButtonsCategories onClick={() => setCategory('nature')}>Natureza</ButtonsCategories>
                <ButtonsCategories onClick={() => setCategory('tech')}>Tecnologia</ButtonsCategories>
                <ButtonsCategories onClick={() => setCategory('people')}>Pessoas</ButtonsCategories>
            </ContainerButtons>

            <PictureContainer>
                {filteredImages.map((image) => (
                    <div key={image.id}>
                        <Picture
                            src={image.download_url} // URL da imagem
                            alt={`Imagem ${image.id}`} // Usando o id como parte do texto alternativo
                        />
                        <Autor>Autor: {image.author}</Autor> {/* Exibe o autor */}
                        <Categories>Categoria: {image.category}</Categories> {/* Exibe a categoria */}
                        <ButtonLink>
                            <Ancora href={image.url} target="_blank" rel="noopener noreferrer">Ver na Unsplash</Ancora>
                        </ButtonLink> {/* Link para a imagem na Unsplash */}
                    </div>
                ))}
            </PictureContainer>
        </>
    );
};

export default Imagens;
