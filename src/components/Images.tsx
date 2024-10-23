import { useState, useEffect } from 'react';
import { Picture, PictureContainer } from './images';

const Images = () => {
    const [images, setImages] = useState<{ id: string; author: string; download_url: string; url: string }[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchImages = async () => {
        try {
            const response = await fetch('https://picsum.photos/v2/list');
            const data = await response.json();
            console.log(data); // Verifique a estrutura dos dados
            setImages(data); // Armazena o array completo de objetos de imagem
            setLoading(false);
        } catch (error) {
            console.error('Erro ao buscar as imagens:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>Seção de fotos</h1>
            <PictureContainer>
                {images.map((image) => (
                    <div key={image.id}>
                        <Picture
                            src={image.download_url} // URL da imagem
                            alt={`Imagem ${image.id}`} // Usando o id como parte do texto alternativo
                        />
                        <p>Autor: {image.author}</p> {/* Exibe o autor */}
                        <p>
                            <a href={image.url} target="_blank" rel="noopener noreferrer">Ver na Unsplash</a>
                        </p> {/* Link para a imagem na Unsplash */}
                    </div>
                ))}
            </PictureContainer>
        </>
    );
};

export default Images;
