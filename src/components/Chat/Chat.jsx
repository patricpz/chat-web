import ChatHeader from "../ChatHeader/ChatHeader";
import ChatBody from "../ChatBody/ChatBody";
import ChatFooter from "../ChatFooter/ChatFooter";
import * as C from './styles'
import Default from "../Default/Default";


function Chat({userChat}) {

  if(!userChat) return <Default/>
  

  return (
    <C.Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  );
}

export default Chat;
