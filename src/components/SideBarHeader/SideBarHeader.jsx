import React, { useState } from "react";
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

function SideBarHeader({ setUserChat }) {
  const [user] = useAuthState(auth);
  const refChat = db.collection("chats").where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);
  const [showModal, setShowModal] = useState(false);
  const [emailInput, setEmailInput] = useState("");

  const handleCreateChat = () => {
    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
    setEmailInput(""); // Limpa o campo de entrada após a criação do chat
    setShowModal(false); // Fecha o modal após a criação do chat
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <button onClick={() => setShowModal(true)}>
          <MdChat />
          Novo Chat
        </button>

      </C.Options>

      {showModal && (
        <C.ModalBackground>
          <C.Modal>
            <C.ModalTitle>Novo Chat</C.ModalTitle>
            <C.ModalInput
              type="email"
              placeholder="Digite o e-mail do destinatário"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <C.ModalButton onClick={handleCreateChat}>Criar Chat</C.ModalButton>
            <C.ModalButtonError onClick={() => setShowModal(false)}>Cancelar</C.ModalButtonError>
          </C.Modal>
        </C.ModalBackground>
      )}
    </C.Container>
  );
}

export default SideBarHeader;
