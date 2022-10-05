import React from "react";
import picProfile from "../Picture/Profile.png";
import picPost from "../Picture/Post.png";
import picMessage from "../Picture/message.png";
import picCalculate from "../Picture/Charge.png";
import picSetting from "../Picture/setting.png";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <div className="mt-16">
      <div className="hidden bg-gradient-to-b from-3-blue via-2-blue to-white lg:fixed lg:mt-2 lg:block lg:w-64 lg:h-screen ">
        <div className="px-5 pt-5 text-xl font-semibold">Home</div>
        <button
          className="w-full hover:bg-2-blue active:bg-3-blue mt-4 py-2 px-5 flex space-x-2"
          type="button"
          onClick={() => navigate("/profile")}
        >
          <div>
            <img className="w-12 h-12" src={picProfile} alt="" />
          </div>
          <div className="mt-auto mb-auto px-5">Profile</div>
        </button>

        <button
          className="w-full hover:bg-2-blue active:bg-3-blue py-2 px-5 flex space-x-2"
          type="button"
          onClick={() => navigate("/post")}
        >
          <div>
            <img className="w-12 h-12" src={picPost} alt="" />
          </div>
          <div className="mt-auto mb-auto px-5">Post</div>
        </button>

        <button
          className="w-full hover:bg-2-blue active:bg-3-blue py-2 px-5 flex space-x-5"
          type="button"
          onClick={() => navigate("/chat")}
        >
          <div>
            <img className="w-12 h-12" src={picMessage} alt="" />
          </div>
          <div className="mt-auto mb-auto px-2">Message</div>
        </button>

        <button
          className="w-full hover:bg-2-blue active:bg-3-blue py-2 px-5 flex space-x-5"
          type="button"
        >
          <div>
            <img className="w-12 h-12" src={picCalculate} alt="" />
          </div>
          <div className="mt-auto mb-auto px-2">Calculate</div>
        </button>

        <button
          className="w-full hover:bg-2-blue active:bg-3-blue py-2 px-5 flex space-x-5"
          type="button"
        >
          <div>
            <img className="w-12 h-12" src={picSetting} alt="" />
          </div>
          <div className="mt-auto mb-auto px-2">Setting</div>
        </button>
      </div>

      <div className="flex justify-center space-x-10 p-2 bg-3-blue fixed bottom-0 left-0 w-full lg:hidden ">
        <button type="button">
          <img className="w-12 h-12" src={picProfile} alt="" />
        </button>
        <button type="button">
          <img className="w-12 h-12" src={picPost} alt="" />
        </button>
        <button type="button">
          <img className="w-12 h-12" src={picMessage} alt="" />
        </button>
        <button type="button">
          <img className="w-12 h-12" src={picCalculate} alt="" />
        </button>
        <button type="button">
          <img className="w-12 h-12" src={picSetting} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Menu;
