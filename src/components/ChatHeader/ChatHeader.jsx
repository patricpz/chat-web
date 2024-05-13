import React from "react";
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import { auth } from "../../services/firebase";
import { ImExit } from "react-icons/im";


const ChatHeader = ({ photoURL, name }) => {
  return (
    <C.Container>
      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
      <C.Options>
        <ImExit onClick={() => [auth.signOut(), setUserChat(null)]}/>
      </C.Options>
    </C.Container>
  );
};

export default ChatHeader;