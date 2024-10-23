import styled from 'styled-components';

export const PictureContainer = styled.div`
    display: flex ; 
    flex-wrap: wrap;           
    justify-content:center;
    margin-left: 15px;        /* Margem à esquerda do contêiner */
           /* Altura do contêiner */
    padding: 30px;             /* Espaçamento interno do contêiner */
           /* Largura máxima do contêiner */
    gap: 10px; 
    align-items: center;
                /* Espaço entre os itens */
`;

export const Picture = styled.img`
    height: 100%;             /* Altura da imagem */
    width: auto;   
    max-height:100%;           /* Largura automática para manter a proporção */
    max-width: 180px;         /* Largura máxima da imagem */
`;