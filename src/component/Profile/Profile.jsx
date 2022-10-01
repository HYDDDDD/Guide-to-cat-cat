import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import User from "./User";

function Profile() {
  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <User />
        </div>
      </div>
      {/* <NavigationBar/>
      <div className="grid grid-cols-1fr">
        <MenuBar/>
        <User/>
      </div> */}
    </div>
  );
}

export default Profile;
