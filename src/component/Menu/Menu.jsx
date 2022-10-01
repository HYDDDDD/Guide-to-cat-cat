import React from "react";
import picProfile from "../Picture/Profile.png";
import picPost from "../Picture/Post.png";
import picMessage from "../Picture/message.png";
import picCalculate from "../Picture/Charge.png";
import picSetting from "../Picture/setting.png";

function Menu() {
  return (
    <div className="mt-16">
      <div className="hidden bg-gradient-to-b from-3-blue via-2-blue to-white sm:fixed sm:mt-2 sm:block sm:w-64 sm:h-screen ">
        <div className="px-5 pt-5 text-xl font-semibold">Home</div>
        <div className="bg-3-blue mt-4 py-2 px-5 flex space-x-2">
          <div>
            <img
              className="w-12 h-12"
              src={picProfile}
              alt=""
            />
          </div>
          <div className="mt-auto mb-auto px-5">Profile</div>
        </div>
        <div className="hover:bg-2-blue py-2 px-5 flex space-x-2">
          <div>
            <img
              className="w-12 h-12"
              src={picPost}
              alt=""
            />
          </div>
          <div className="mt-auto mb-auto px-5">Post</div>
        </div>
        <div className="hover:bg-2-blue py-2 px-5 flex space-x-5">
          <div>
            <img
              className="w-12 h-12"
              src={picMessage}
              alt=""
            />
          </div>
          <div className="mt-auto mb-auto px-2">Message</div>
        </div>
        <div className="hover:bg-2-blue py-2 px-5 flex space-x-5">
          <div>
            <img
              className="w-12 h-12"
              src={picCalculate}
              alt=""
            />
          </div>
          <div className="mt-auto mb-auto px-2">Calculate</div>
        </div>
        <div className="hover:bg-2-blue py-2 px-5 flex space-x-5">
          <div>
            <img
              className="w-12 h-12"
              src={picSetting}
              alt=""
            />
          </div>
          <div className="mt-auto mb-auto px-2">Setting</div>
        </div>
      </div>

      <div className="flex justify-center space-x-10 p-2 bg-3-blue fixed bottom-0 left-0 w-full sm:hidden ">
        <button type="button">
          <img
            className="w-12 h-12"
            src={picProfile}
            alt=""
          />
        </button>
        <button type="button">
          <img
            className="w-12 h-12"
            src={picPost}
            alt=""
          />
        </button>
        <button type="button">
          <img
            className="w-12 h-12"
            src={picMessage}
            alt=""
          />
        </button>
        <button type="button">
          <img
            className="w-12 h-12"
            src={picCalculate}
            alt=""
          />
        </button>
        <button type="button">
          <img
            className="w-12 h-12"
            src={picSetting}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Menu;
