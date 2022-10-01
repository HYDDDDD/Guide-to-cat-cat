import React from "react";
import ProfilePic from "../Picture/ProfilePic.png";
import btnMore from "../Picture/btnMore.png";

function User() {
  return (
    <div>
      <div className="flex justify-center space-x-3 lg:space-x-5 mt-5">
        <div>
          <img className="px-2" src={ProfilePic} alt="profile_picture" />
        </div>
        <div className="mt-3 sm:mt-5 sm:space-y-5">
          <div className="flex space-x-20 sm:space-x-28">
            <div className="text-xl font-bold">John</div>
            <div className="flex sm:space-x-5">
              <div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white w-24 font-bold p-1 rounded">
                  Follow
                </button>
              </div>
              <div>
                <img src={btnMore} alt="" />
              </div>
            </div>
          </div>
          <div className="flex mt-2 sm:space-x-5">
            <div><b>1.258</b> posts</div>
            <div><b>20M</b> followers</div>
            <div><b>1.250</b> following</div>
          </div>
          <div className="font-bold mt-2">Maxwell</div>
        </div>
      </div>
    </div>
  );
}

export default User;
