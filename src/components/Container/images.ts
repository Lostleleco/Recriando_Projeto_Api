import styled from 'styled-components';

export const Title = styled.h1`
       text-align: center;
       font-size: 40px;
       font-weight: bold;
       padding: 18px;
       background-color: #487eb0;
       color:#f5f6fa;
`;

export const PictureContainer = styled.div`
    display: flex ; 
    flex-wrap: wrap;           
    justify-content:center;
    background-color:#192a56 ;
    padding: 30px;             
    gap: 10px; 
    align-items: center;
    min-height: 78vh;
              
`;

export const Picture = styled.img`
    height: 100%;             
    width: 190px;   
    max-height:100%;           
    max-width: 200px;  
          
`;

export const Autor = styled.p`
color:#dfe6e9;
font-size:15px;
`
export const ButtonLink = styled.button`
background-color:#55efc4 ;

text-decoration: none;
cursor:pointer;
border-radius: 10px;
margin-left: 18%;
padding-top: 15px;
padding-bottom: 20px;
padding: 7px;
`
export const Ancora = styled.a`
text-decoration: none;
text-align: center;
align-items: center;
justify-content: center;
color:#ffffff ;
`
export const ContainerButtons = styled.div`
text-align: center;
align-items: center;
justify-content: center;
padding: 16px;
background-color: #487eb0;
color:#ffffff;
text-align: center;
align-items: center;
justify-content: center;

`

export const ButtonsCategories = styled.button`
text-decoration: none;
cursor:pointer;
border-radius: 10px;
padding-top: 15px;
padding-bottom: 20px;
padding: 7px;
text-align: center;
align-items: center;
justify-content: center;
`
export const Categories = styled.p`
text-align: center;
align-items: center;
justify-content: center;
color:#ffffff;
`