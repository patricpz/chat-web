import React, { useState } from "react";
import * as C from "./styles";
import { MdPerson } from "react-icons/md";
import { auth } from "../../services/firebase";
import { ImExit } from "react-icons/im";


const ChatHeader = ({ photoURL, name }) => {


  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <C.Container>

      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        <ImExit onClick={openModal}/>
      </C.Options>


      {modalIsOpen && (
        <C.ModalBackground>
          <C.Modal>
            <C.ModalTitle>Confirmação</C.ModalTitle>
            <C.ModalText>Você realmente deseja sair do chat?</C.ModalText>
            <C.ModalButton onClick={() => [auth.signOut(), setUserChat(null)]} >Sim</C.ModalButton>
            <C.ModalButtonError onClick={closeModal}>Não</C.ModalButtonError>
          </C.Modal>
        </C.ModalBackground>
      )}



    </C.Container>
  );
};

export default ChatHeader;