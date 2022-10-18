import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import next from "../Picture/next.png";
import btnBack from "../Picture/back.png";

function PasswordSecurity() {
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
                  รหัสผ่านและการรักษาความปลอดภัย
                </div>
              </div>

              <div className="font-bold text-xl mt-4">เปลี่ยนรหัสผ่าน</div>

              <button
                className="flex space-x-"
                type="button"
                onClick={() => navigate("/Editpass")}
              >
                <div className="text-ms font-normal mt-2 ">
                  ควรใช้รหัสผ่านที่รัดกุมและไม่ควรซ้ำกับรหัสผ่านที่คุณใช้ที่อื่น{" "}
                </div>
                <img className="w-5 h-5 mt-3 ml-24" src={next} alt="" />
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <div className="font-bold text-xl mt-4">
                อุปกรณ์ที่เข้าระบบอยู่
              </div>

              <button
                className="flex space-x-"
                type="button"
                // onClick={() => navigate("/Editpass")}
              >
                <div className="text-ms font-normal mt-2 ">
                  Mac bangkok, Thailand
                </div>
                <img className="w-5 h-5 mt-3 ml-80" src={next} alt="" />
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <div className="font-bold text-xl mt-4">
                การยืนยันข้อมูลระบุตัวตน
              </div>

              <button
                className="flex space-x-"
                type="button"
                // onClick={() => navigate("/Editpass")}
              >
                <div className="text-ms font-normal mt-2 ">ยืนยันตัวตนแล้ว</div>
                <img className="w-5 h-5 mt-3 ml-96" src={next} alt="" />
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

export default PasswordSecurity;
