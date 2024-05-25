import styled from "styled-components";

export const Container = styled.div`
  width: 35%;
  max-width: 415px;
  border-right: 1px solid #25262f;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: left 0.3s ease;

  /* Media queries for responsive behavior */
  @media (min-width: 651px) {
    left: 0;
    position: static;
  }

  @media (max-width: 650px) {
    width: 100%;
    left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    z-index: 2;
  }
`;


export const OpenButton = styled.div`
  position: fixed;
  top: 7px;
  left: 10px;
  border: none;
  outline: none; 
  padding: 10px 15px;
  font-size: 20px;
  cursor: pointer;
  z-index: 3;
  transition: opacity 0.3s ease; 

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease; /* Transição suave para cor e transformação */

    &:hover {
      color: #FFF; 
      transform: scale(1.1); 
    }
  }

  @media (min-width: 651px) {
    display: none;
  }
`;


export const CloseButton = styled.div`
    position: absolute;
    top: 7px;
    right: 10px;
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    z-index: 5;
    border: none;
    outline: none; 

    @media (min-width: 651px) {
        display: none;
    }

    svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease; /* Transição suave para cor e transformação */

    &:hover {
      color: #FFF; 
      transform: scale(1.1); 
    }
  }
`;

