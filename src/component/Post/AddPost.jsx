import React from "react";
import AddPostBar from "./AddPostBar";
import btnPublic from "../Picture/btnPublicPost.png";
import btnAlbum from "../Picture/btnAlbum.png";
import picBackgroundPic from "../Picture/create_background_text.png";
import picColor from "../Picture/pictureColor.png";
import picPerson from "../Picture/personColor.png";
import picEmoji from "../Picture/EmojiColor.png";
import picLocation from "../Picture/LocationColor.png";
import picMore from "../Picture/MoreColor.png";

function AddPost({ currentUser }) {
  return (
    <div>
      <AddPostBar />
      <div>
        <div className="flex justify-center">
          <div className=" bg-1-blue h-full mt-24 rounded-xl">
            <div className="flex space-x-4 p-2">
              <div>
                <img
                  className="w-16 px-2"
                  src={currentUser.photoURL}
                  alt="profile_picture"
                />
              </div>
              <div>
                <div className="font-bold">Fern</div>
                <div className="flex">
                  <div>
                    <button className="text-4-blue font-bold rounded hover:text-blue-600 hover:border-blue-600">
                      <img src={btnPublic} alt="" />
                    </button>
                  </div>
                  <div>
                    <button className="text-4-blue font-bold rounded hover:text-blue-600 hover:border-blue-600">
                      <img src={btnAlbum} alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* content post */}
            <div className="h-500px sm:h-80 px-5">
              <div className="text-start text-sm break-all p-1">
                คุณกำลังคิดอะไรอยู่
              </div>
            </div>
            <div className="bottom-0 left-0 w-full mt-11">
              <div>
                <img src={picBackgroundPic} alt="" />
              </div>
              <div className="flex justify-between h-20 bg-white border-t-2 shadow-lg rounded-t-lg mt-2 p-2">
                <div className="mt-auto mb-auto">
                  <img src={picColor} alt="" />
                </div>
                <div className="mt-auto mb-auto">
                  <img src={picPerson} alt="" />
                </div>
                <div className="mt-auto mb-auto">
                  <img src={picEmoji} alt="" />
                </div>
                <div className="mt-auto mb-auto">
                  <img src={picLocation} alt="" />
                </div>
                <div className="mt-auto mb-auto">
                  <img src={picMore} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
