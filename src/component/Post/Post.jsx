import React from "react";
import MenuBar from "../Menu/Menu";
import NavigationBar from "../Navigation_bar/NavigationBar";
import AddBar from "./AddBar";
import ContactsMenu from "./ContactsMenu";
import PostContent from "./PostContent";

function Post({ currentUser }) {
  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <div className="w-screen mt-16 py-2 lg:ml-64">
            <div className="hidden sm:flex">
              <div className="sm:w-830px">
                <AddBar currentUser={currentUser} />
                <PostContent currentUser={currentUser} />
              </div>
              <div className="">
                <ContactsMenu />
              </div>
            </div>

            <div className="sm:hidden block">
              <div className="sm:w-830px">
                <AddBar currentUser={currentUser} />
                <PostContent currentUser={currentUser} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
