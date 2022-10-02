import React, { useState } from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import ContactList from "./ContactList";
import ChatBox from "./ChatBox";

function Chat() {
  const [showChatBox, setShowChatBox] = useState(false);

  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <div className="sm:flex sm:w-screen w-full mt-16 py-2 lg:ml-64">
            <div className="sm:w-2/5 w-full border border-black">
              <ContactList setShowChatBox={setShowChatBox} />
            </div>
            {/* <div className="bg-red-600 w-screen">
              <ChatBox />
            </div> */}
            {showChatBox ? <ChatBox /> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
