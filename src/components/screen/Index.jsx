import { useState, useEffect } from "react";
import SideBar from "../SideBar/SideBar";
import * as C from './styles'
import Chat from '../Chat/Chat'
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Login from "../Login/Login";


function Index() {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
      setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (!user) return <Login />;

  

  return (
    <C.Container>
      <SideBar setUserChat={setUserChat} userChat={userChat}/>
      <Chat userChat={userChat}/>
    </C.Container>
  );
}

export default Index;
