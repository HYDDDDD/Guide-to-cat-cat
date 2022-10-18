import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import { useNavigate } from "react-router-dom";
import next from "../Picture/next.png";

function Payment() {
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
              <div className="font-bold text-2xl">การชำระเงิน</div>
              <div className="font-bold text-xl mt-4">วิธีการชำระเงิน</div>

              <button className="flex" type="button">
                <div className="text-ms font-normal mt-2 ">QR พร้อมเพย์</div>
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <button className="flex" type="button">
                <div className="text-ms font-normal mt-2 ">
                  บัตรเครดิต/เดบิต
                </div>
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <button className="flex" type="button">
                <div className="text-ms font-normal mt-2 ">ชำระปลายทาง</div>
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <button className="flex" type="button">
                <div className="text-ms font-normal mt-2 ">ชำระผ่านATM</div>
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <button className="flex " type="button">
                <div className="text-ms font-normal mt-2 ">
                  โอน/ชำระผ่านบัญชีธนาคาร
                </div>
              </button>
              <div className="text-ms font-normal underline ">
                _____________________________________________________________________
              </div>

              <button className="flex" type="button">
                <div className="text-ms font-bold mt-2 ">
                  ประวัติการชำระเงิน
                </div>
                <img className="w-5 h-5 mt-3 ml-80" src={next} alt="" />
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

export default Payment;
