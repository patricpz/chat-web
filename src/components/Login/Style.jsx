import styled from "styled-components";
import fundoLogin from '../../img/fundo-ondulado-escuro_23-2148388250.avif';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${fundoLogin}) no-repeat;
    background-size: cover; /* Torna a imagem responsiva */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export const LoginForm = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Ajustei o sombreado */
  max-width: 400px;
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.h2`
  color: #000; /* Cor do título */
  text-align: center; /* Alinhar o texto ao centro */
  margin-bottom: 20px; /* Adicionando espaçamento abaixo do título */
`;

export const Button = styled.button`
  display: flex; /* Usar flexbox */
  justify-content: center; /* Alinhar conteúdo ao centro */
  align-items: center; /* Alinhar conteúdo ao centro */
  width: 100%;
  padding: 12px; /* Aumentei o padding para deixar o botão mais espaçado */
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Adicionei uma transição suave */
  
  &:hover {
    background-color: #003366; /* Mudança de cor no hover */
  }

  /* Estilo para o texto e imagem dentro do botão */
  & > div {
    display: flex;
    align-items: center;
  }

  & img {
    margin-right: 8px; /* Espaçamento entre a imagem e o texto */
  }
`;



