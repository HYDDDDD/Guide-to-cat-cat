import React, { useState } from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import ContactList from "./ContactList";
import ChatBox from "./ChatBox";

function Chat({ currentUser, statusSignIn }) {
  const [showChatBox, setShowChatBox] = useState(false);

  return (
    <div>
      <div className="absolute z-10">
        <NavigationBar />
      </div>
      <div>
        <div className="flex">
          <MenuBar />
          <div className="hidden relative sm:flex w-screen mt-16 py-2 lg:ml-64">
            <div className="sm:w-2/5 w-full border border-black">
              <ContactList setShowChatBox={setShowChatBox} />
            </div>
            {showChatBox ? (
              <div className="sm:w-3/5">
                <ChatBox
                  currentUser={currentUser}
                  statusSignIn={statusSignIn}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="sm:hidden w-screen mt-16 py-2 lg:ml-64">
            {showChatBox ? (
              <>
                <div className="bg-red-600 sm:w-3/5">
                  <button
                    onClick={() => setShowChatBox((val) => !val)}
                    className="p-2 rounded-3xl bg-2-blue"
                  >
                    <img
                      className="w-5 h-5"
                      src="https://cdn-icons-png.flaticon.com/512/467/467274.png"
                      alt=""
                    />
                  </button>
                  <ChatBox
                    currentUser={currentUser}
                    statusSignIn={statusSignIn}
                  />
                </div>
              </>
            ) : (
              <div className="sm:w-2/5 w-full border border-black">
                <ContactList setShowChatBox={setShowChatBox} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
