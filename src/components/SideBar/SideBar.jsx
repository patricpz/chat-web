import { useEffect, useState } from "react";
import { auth } from "../../services/firebase";
import * as C from "./styles"
import SideBarHeader from "../SideBarHeader/SideBarHeader";
import SideBarChat from "../SideBarChat/SideBarChat";


function SideBar({setUserChat, userChat}) {

    return (
        <C.Container>
            <SideBarHeader setUserChat={setUserChat} />
            <SideBarChat setUserChat={setUserChat} userChat={userChat} />
        </C.Container>
    );
}

export default SideBar;
