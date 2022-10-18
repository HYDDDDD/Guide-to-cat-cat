import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import btnBack from "../Picture/back.png";

function Editpass() {
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
                  onClick={() => navigate("/passwordSecurity")}
                >
                  <img src={btnBack} alt="" />
                </button>
                <div className="font-bold text-2xl">เปลี่ยนรหัสผ่าน</div>
              </div>

              <div className="font-bold text-lg mt-4">รหัสผ่านเดิม</div>
              <input
                type="text"
                placeholder="รหัสผ่านเดิม"
                className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />

              <div className="font-bold text-lg mt-4">รหัสผ่านใหม่</div>
              <input
                type="text"
                placeholder="รหัสผ่านใหม่"
                className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="font-bold text-lg mt-4">ยืนยันรหัสผ่าน</div>
              <input
                type="text"
                placeholder="ยืนยันรหัสผ่าน"
                className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="mt-10">
                <button className="bg-sky-500 hover:bg-sky-700 rounded-lg text-base">
                  {" "}
                  ยืนยัน{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editpass;
