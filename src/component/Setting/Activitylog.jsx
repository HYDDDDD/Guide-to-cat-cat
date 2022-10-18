import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import btnBack from "../Picture/back.png";

function Activitylog() {
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
                <div className="font-bold text-2xl">บันทึกกิจกรรม</div>
              </div>
                  <div className="font-bold text-2xl"></div>
                     <div className="font-bold text-xl mt-4">4 สิงหาคม 2565</div>
                     <div className="text-ms font-normal mt-2 ">คุณได้แชร์โพสต์ของ Nathaweranut</div>
                     <div className="text-ms font-normal underline ">_____________________________________________________________________</div>

                     <div className="font-bold text-xl mt-4">3 สิงหาคม 2565</div>
                     <div className="text-ms font-normal mt-2 ">คุณได้อัพเดตสถานะของตนเอง</div>
                     <div className="text-ms font-normal underline ">_____________________________________________________________________</div>

                     <div className="font-bold text-xl mt-4">29 กรกฎาคม 2565</div>
                     <div className="text-ms font-normal mt-2 ">คุณได้แชร์โพสต์ของ Kantamas</div>
                     <div className="text-ms font-normal mt-2 ">คุณได้แชร์จากของ Youtube</div>
                     <div className="text-ms font-normal underline ">_____________________________________________________________________</div>
                   </div>
                   
               </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Activitylog;
