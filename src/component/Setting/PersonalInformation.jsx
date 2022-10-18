import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import next from "../Picture/next.png";
import btnBack from "../Picture/back.png";

function PersonalInformation({ currentUser }) {
  const navigate = useNavigate();
  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
        </div>
        <div className="flex justify-center lg:space-x-5 mt-5 ml-20">
          <div className="flex space-x-1 sm:space-x-28">
            <div className="mt-5">
              <div className="flex space-x-5">
                <button
                  className="flex space-x-"
                  type="button"
                  onClick={() => navigate("/setting")}
                >
                  <img src={btnBack} alt="" />
                </button>
                <div className="font-bold text-2xl">
                  ข้อมูลส่วนตัวและข้อมูลบัญชี
                </div>
              </div>

              <div className="font-bold text-xl mt-4">ชื่อ</div>

              <button
                className="flex space-x-"
                type="button"
                onClick={() => navigate("/Editname")}
              >
                <div className="text-xl font-normal mt-2 ">
                  {currentUser.displayName}{" "}
                </div>
                <img className="w-5 h-5 mt-3 ml-96" src={next} alt="" />
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <div className="font-bold text-xl mt-4">ข้อมูลติดต่อ</div>

              <button
                className="flex space-x-"
                type="button"
                onClick={() => navigate("/Editinformation")}
              >
                <div className="text-xl font-normal mt-2 ">
                  64021890@up.ac.th
                </div>
                <img className="w-5 h-5 mt-3 ml-72" src={next} alt="" />
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
