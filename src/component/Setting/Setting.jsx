import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import Account from "./Account";

function Setting() {
  return (
    <div>
      <NavigationBar />
        <div className="flex">
          <MenuBar />
        </div>
          <div className="text-xl font-bold">
            <Account />
          </div>
   </div>
  );
}
export default Setting;

