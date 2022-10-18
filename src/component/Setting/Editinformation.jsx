import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import btnBack from "../Picture/back.png";
import { useNavigate } from "react-router-dom";

function Editinformation() {
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
                  onClick={() => navigate("/personalInformation")}
                >
                  <img src={btnBack} alt="" />
                </button>
                <div className="font-bold text-2xl">แก้ไขข้อมูลติดต่อ</div>
              </div>

              <div className="font-bold text-lg mt-4">E mail</div>
              <input
                type="text"
                placeholder="email"
                className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <div className="font-bold text-lg mt-4">รหัสผ่าน</div>
              <input
                type="text"
                placeholder="รหัสผ่าน"
                className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-10">
                <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-base">
                  {" "}
                  Save{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editinformation;
