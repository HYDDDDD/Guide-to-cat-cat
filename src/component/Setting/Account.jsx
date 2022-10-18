import React from "react";
import picProfile from "../Picture/Profile.png";
import Pass from "../Picture/Pass.PNG";
import payment from "../Picture/payment.PNG";
import lingo from "../Picture/lingo.PNG";
import darkmode from "../Picture/darkmode.PNG";
import activitylog from "../Picture/activitylog.PNG";
import logout from "../Picture/logout.PNG";
import { useNavigate } from "react-router-dom";

function Account() {
    const navigate = useNavigate();

    return (
        <div className="flex justify-center lg:mt-5">
            <div className="flex space-x-10">

             <div className="mt-2">
               <div className="font-bold text-2xl">บัญชี</div>
               <div className="flex justify-around font-semibold text-lg ">อัพเดตข้อมูลของคุณเพื่อรักษาความปลอดภัยของบัญชี</div>
               
               <button 
                  className="w-full mt-2 py-2 px-5 flex space-x-2"
                  type="button"
                  onClick={() => navigate("/PersonalInformation")}
               >
                  <div className="mt-2">
                    <img className="w-10 h-10" src={picProfile} alt="" />
                    <div className="font-normal text-sm -mt-7 mb-auto px-12">ข้อมูลส่วนตัวและข้อมูลบัญชี</div>
                  </div>
               </button>

               <button 
                  className="w-full mt-2 py-2 px-5 flex space-x-2"
                  type="button"
                  onClick={() => navigate("/PasswordSecurity")}
               >
                 <div className="mt-3">
                    <img className="w-10 h-10" src={Pass} alt="" />
                    <div className="font-normal text-sm -mt-7 mb-auto px-12">รหัสผ่านและการรักษาความปลอดภัย</div>
                 </div>
                </button>
               
                <button 
                  className="w-full mt-2 py-2 px-5 flex space-x-2"
                  type="button"
                  onClick={() => navigate("/Payment")}
               >
               <div className="mt-3">
                  <img className="w-10 h-9" src={payment} alt="" />
                  <div className="font-normal text-sm -mt-7 mb-auto px-12">การชำระเงิน</div>
               </div>
               </button>

               <div className="mt-2">
               <div className="font-bold text-2xl">ตั้งค่า</div>
               <div className=" font-semibold text-lg ">ปรับแต่งหน้าต่างของคุณ</div>
               </div>

               <button 
                  className="w-full mt-2 py-2 px-5 flex space-x-2"
                  type="button"
                  onClick={() => navigate("/Language")}
               >
               <div className="mt-2">
                  <img className="w-10 h-9" src={lingo} alt="" />
                  <div className="font-normal text-sm -mt-7 mb-auto px-12">ภาษา</div>
               </div>
               </button>

               <button 
                  className="w-full mt-2 py-2 px-5 flex space-x-2"
                  type="button"
                  onClick={() => navigate("/Darkmodee")}
               >
               <div className="mt-3">
                  <img className="w-10 h-9" src={darkmode} alt="" />
                  <div className="font-normal text-sm -mt-7 mb-auto px-12">โหมดสีเข้ม</div>
               </div>
               </button>

               <div className="mt-2">
               <div className="font-bold text-2xl">ข้อมูลของคุณ</div>
               <div className=" font-semibold text-lg ">เข้าถึงกิจกรมเพื่อตรวจสอบข้อมูลของคุณ</div>
               </div>

               <button 
                  className="w-full mt-2 py-2 px-5 flex space-x-2"
                  type="button"
                  onClick={() => navigate("/Activitylog")}
               >
               <div className="mt-2">
                  <img className="w-10 h-9" src={activitylog} alt="" />
                  <div className="font-normal text-sm -mt-7 mb-auto px-12">บันทึกกิจกรรม</div>
               </div>
               </button>
               
               
               <div className="mt-2">
               <div className="font-bold text-2xl">ออกจากระบบ</div>
               </div>

               <button 
                  className="w-full mt-2 py-2 px-5 flex space-x-2"
                  type="button"
                  onClick={() => navigate("/Logout")}
               >
               <div className="mt-2">
                  <img className="w-10 h-9" src={logout} alt="" />
                  <div className="font-normal text-sm -mt-7 mb-auto px-12">ออกจากระบบ</div>
               </div>
               </button>
               
               
             </div>
            </div>
        </div>
    )
}

export default Account;
