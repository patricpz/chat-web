import { useState } from "react";
import * as C from "./styles";
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import SideBarChat from "../SideBarChat/SideBarChat";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";


function SideBar({ setUserChat, userChat }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {!isOpen && (
                <C.OpenButton onClick={toggleSidebar}><FaBars />
                </C.OpenButton>
            )}
            <C.Container style={{
            }} isOpen={isOpen}>
                <C.CloseButton onClick={toggleSidebar}><IoClose /></C.CloseButton>
                <SideBarHeader setUserChat={setUserChat} />
                <SideBarChat setUserChat={setUserChat} userChat={userChat} />
            </C.Container>
        </>
    );
}

export default SideBar;
