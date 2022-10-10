import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";

function Setting() {
  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <div className="w-screen mt-16 py-2 lg:ml-64"></div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
