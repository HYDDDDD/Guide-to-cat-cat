import React from "react";
import btnPicture from "../Picture/picture.png";

function AddBar({ currentUser }) {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex justify-between bg-1-blue w-11/12 sm:w-3/4 h-20 rounded-lg">
        <div className="mt-auto mb-auto">
          <img
            className="px-2 w-20"
            src={currentUser.photoURL}
            alt="profile_picture"
          />
        </div>
        <div className="mt-auto mb-auto font-bold text-lg">Add a post</div>
        <div className="mt-auto mb-auto px-2">
          <img src={btnPicture} alt="" />
        </div>
      </div>
    </div>
  );
}

export default AddBar;
