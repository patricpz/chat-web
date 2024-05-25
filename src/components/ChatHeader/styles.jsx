import styled from "styled-components";

export const OpenButton = styled.button`
    position: fixed;
    top: 20px;
    left: 20px;
    background-color: #111;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 20px;
    cursor: pointer;
    z-index: 3;

    @media (min-width: 651px) {
        display: none;
    }
`;

export const Container = styled.div`
  height: 59px;
  background-color: #363742;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 2px #0003;
  z-index: 1;
  color: #FFF;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 30px;
    height: 30px;
    background-color: #54656f;
    border-radius: 50%;
    margin-right: 10px;
    min-width: fit-content;
  }

  @media (max-width: 650px) {
    margin-left: 55px;
  }
`;

export const NameContent = styled.div`
  display: grid;
`;

export const Name = styled.span`
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  min-width: fit-content;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
    transition: color 0.3s ease; 
  }

  svg:hover {
    color: #fff; 
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
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: #363742;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 500px;
  max-width: 90%;
  text-align: center;
`;

export const ModalTitle = styled.h3`
  margin-bottom: 20px;
  color: #FFF;
  font-size: 24px;
`;

export const ModalText = styled.span`
  display: block;
  margin-bottom: 20px;
  color: #bbb;
  font-size: 18px;
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #1885ff;
  color: #FFF;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0a5dc4;
  }
`;

export const ModalButtonError = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: red;
  color: #FFF;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #a00000;
  }
`;