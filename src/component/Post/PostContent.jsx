import React from "react";
import btnMore from "../Picture/btnMore.png";
import btnLike from "../Picture/like.png";
import btnComment from "../Picture/comment.png";
import PostPic1 from "../Picture/PostPic1.png";
import CommentPost from "./CommentPost";

function PostContent({ currentUser }) {
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="bg-1-blue w-11/12 sm:w-3/4 h-fit rounded-lg">
          <div className="flex justify-between">
            <div className="flex space-x-2">
              <div className="mt-auto mb-auto">
                <img
                  className="p-2 w-20"
                  src={currentUser.photoURL}
                  alt="profile_picture"
                />
              </div>
              <div className="mt-auto mb-auto">
                <div className="font-bold text-lg">
                  {currentUser.displayName}
                </div>
                <div>22:00</div>
              </div>
            </div>
            <div className="mt-auto mb-auto px-2">
              <img src={btnMore} alt="" />
            </div>
          </div>
          <div className="ml-7 mt-4">
            <div className="w-3/5 text-start text-sm break-all leading-relaxed tracking-normal font-semibold p-1">
              วันนี้จะมาแชร์วิธีรักษาและการป้องกัน “เชื้อราแมว” กันค่ะ ...
            </div>
            <div>
              <img src={PostPic1} alt="" />
            </div>
            <div className="flex space-x-4 mt-2">
              <div>
                <div className="text-center">99</div>
                <div>
                  <img src={btnLike} alt="" />
                </div>
              </div>
              <div>
                <div className="text-center">3</div>
                <div>
                  <img src={btnComment} alt="" />
                </div>
              </div>
            </div>
            <div>
              <CommentPost />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostContent;
