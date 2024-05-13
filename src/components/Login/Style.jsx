import styled from "styled-components";
import fundoLogin from '../../img/fundo-ondulado-escuro_23-2148388250.avif';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${fundoLogin}) no-repeat;
    background-size: cover; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;


export const LoginForm = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  max-width: 400px;
  width: 100%;
  margin-top: 20px;
`;

export const Title = styled.h2`
  color: #000; 
  text-align: center; 
  margin-bottom: 20px; 
`;

export const Button = styled.button`
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%;
  padding: 12px; 
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  
  &:hover {
    background-color: #003366; 
  }

  & > div {
    display: flex;
    align-items: center;
  }

  & img {
    margin-right: 8px; 
  }
`;



