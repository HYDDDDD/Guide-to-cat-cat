import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import CatLaser from "../../Picture/CatLaser-1.png";

function Laser({ setStatusNavigate, setStatusToy }) {
  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button type="button" onClick={() => setStatusToy("toy")}>
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">เลเซอร์แมว</div>
        </div>
        <div className="space-y-10">
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={CatLaser} alt="" />
              </div>
              <div className="flex justify-center mt-1">
                <button
                  className=" bg-2-blue flex p-2 space-x-2 rounded-md"
                  type="button"
                >
                  <div>
                    <img src={cart} alt="" />
                  </div>
                  <div className="mt-auto mb-auto font-semibold text-4-blue">
                    เพิ่มสินค้าลงตะกร้า
                  </div>
                </button>
              </div>
            </div>
            <div className="mt-2">
              <div className="font-semibold">เลเซอร์แมว</div>
              <div className="text-sm lg:ml-0 ml-9">
                ของเล่นแมว เลเซอรแมว ตัวชี้เลเซอร์อินฟราเรด เลเซอร์สีแดง
                <ul className="list-disc">
                  <li>ฉายได้ไกลมากกว่า 100 ฟุต (ในร่ม)</li>
                  <li>สร้างความเพลิดเพลินให้น้องแมวและเจ้าของ</li>
                  <li>LED อินเตอร์แอคทีของเล่นไฟฉายอินฟราเรดแสงเลเซอร</li>
                  <li>ใช้งานง่าย มีหัวต่อ USB สะดวก</li>
                  <li>ชาร์ตเต็มในเวลา 1.5 ชม.</li>
                  <li>ระยะใช้งานแบตเตอรี่ 3 ชั่วโมง</li>
                  <li>
                    ขนาดเล็กน้ำหนักเบา เหมือนปากกาพกพาตรวจคราบปัสสาวะจาก
                    การสเปรย์ของแมว เพื่อการทำความสะอาดที่ทั่วถึง
                  </li>
                </ul>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-60 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        LED light/Purple light/Infraed
                      </div>
                    </button>
                    <button
                      className="bg-4-blue w-24 py-1 ml-auto mr-auto rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        350 บาท
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-end mt-10">
            <button type="button" onClick={() => setStatusNavigate("cart")}>
              <img className="sm:w-28 w-20" src={iconCart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laser;
