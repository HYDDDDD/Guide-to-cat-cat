import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import User from "./User";
import StoryUser from "./StoryUser";
import TreasuryLikes from "./TreasuryLikes";

function Profile() {
  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <div className="w-screen mt-16 py-2 lg:ml-64">
            <User />
            <StoryUser />
            <TreasuryLikes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
