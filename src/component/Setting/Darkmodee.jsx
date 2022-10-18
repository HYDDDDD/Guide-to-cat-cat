import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";



function Darkmodee() {
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
                     <div className="font-bold text-2xl">โหมดสีเข้ม</div>
                     <div className="font-bold text-xl mt-4">เลือกโหมด</div>
                     <div className="mt-2 ">
                     <select className="ring ring-blue-500" >
                         <option>เปิด</option>
                         <option>ปิด</option>
                     </select>
                     </div>
                     <div className="text-ms font-normal underline ">_____________________________________________________________________</div>
                   
                 </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Darkmodee;
