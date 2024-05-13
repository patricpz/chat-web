import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #363742;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #0003;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 50%;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #FFF;
    font-size: 16px;
    border: 1px solid transparent;
    border-radius: 15px;
    padding: 8px 16px;
    transition: all 0.3s ease;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }

    &:hover {
      color: #54656f;
      border-color: #54656f;
    }
  }
`;


export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  background-color: #363742;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.h3`
  margin-bottom: 10px;
  color: #FFF;
`;

export const ModalButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #1885ff ;
  color: #FFF;
`;



export const ModalInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  outline: none;
  border: none;
  border-radius: 5px;
  box-shadow: inset 0 0 1px 1px #0003;
  background-color: #0003;
  color: #FFF;

  &:focus {
    border: 1px solid #1885ff;
  }
`;

export const ModalButtonError = styled.button`
  color: white;
  margin-bottom: 10px;
  padding: 8px 16px;
  margin-right: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: red ;
`;
