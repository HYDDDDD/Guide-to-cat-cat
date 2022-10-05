import React from "react";
import ProfileDennis from "../Picture/profilePic-Dennis.png";
import ProfileFern from "../Picture/ProfilePic-Fern.png";


function CommentPost() {
  return (
    <div>
      <div className="flex m-2 space-x-2 bg-2-blue rounded w-11/12 h-fit">
        <div className="p-1">
          <img src={ProfileDennis} alt="" />
        </div>
        <div>
          <div className="font-bold">Dennis Han</div>
          <div>สามารถซื้อยามาใส่เองได้มั้ยครับ ?</div>
        </div>
      </div>
      <div className="flex ml-14 space-x-2 bg-2-blue rounded w-5/6 h-fit">
        <div className="p-1">
          <img src={ProfileDennis} alt="" />
        </div>
        <div>
          <div className="font-bold">Dennis Han</div>
          <div>สามารถซื้อยามาใส่เองได้มั้ยครับ ?</div>
        </div>
      </div>
      <div className="flex m-2 space-x-2 bg-2-blue rounded w-11/12 h-fit">
        <div className="p-1">
          <img src={ProfileFern} alt="" />
        </div>
        <div>
          <div className="font-bold">Dennis Han</div>
          <div>เชื้อราแมวอันตรายกับแมวมากมั้ยคะ ?</div>
        </div>
      </div>
    </div>
  );
}

export default CommentPost;
