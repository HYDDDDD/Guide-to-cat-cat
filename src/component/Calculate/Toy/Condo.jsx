import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import Rem13 from "../../Picture/Rem13-1.png";
import Baandee from "../../Picture/Baandee-1.png";

function Condo({ setStatusNavigate, setStatusToy }) {
  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button type="button" onClick={() => setStatusToy("toy")}>
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">คอนโดแมว</div>
        </div>
        <div className="space-y-10">
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={Rem13} alt="" />
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
              <div className="font-semibold">REM13</div>
              <div className="text-sm lg:ml-0 ml-9">
                คอนโดแมวรุ่นใหม่ขนาดความสูง 138 ซม
                <ul className="list-disc">
                  <li>มี 4 ชั้นให้น้องแมวปีนปายได้อย่างสนุกสนาน</li>
                  <li>ทำความสะอาดง่าย</li>
                  <li>ทนทานผลิตจากวัสดุอย่างดี</li>
                  <li>เสาทุกต้นลับเล็บได้หมด!</li>
                  <li>ประกอบง่ายพร้อมคู่มือการติดตั้ง</li>
                </ul>
                **หมายเหตุ หากน้องมีน้ำหนักตัวมากอาจจะทำให้คอนโด
                เสื่อมสภาพเร็วนะคะ**
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-24 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">138 cm</div>
                    </button>
                    <button
                      className="bg-4-blue w-24 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        1240 บาท
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
          <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
            <div>
              <img src={Baandee} alt="" />
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
            <div className="font-semibold">Baandee</div>
            <div className="text-sm lg:ml-0 ml-9">
              ️️คอนโดแมว สูง55*50*35ซม. และ 75x50x35 ซม
              ️️เหมาะสำหรับพื้นที่จำกัดนะคะ(แมวหลายตัว
              ตัวใหญ่บึ้มๆแนะนำรุ่นใหญ่นะคะ) ️️น้ำหนักน้องเมี้ยวไม่เกิน 6KG
              ️️เหมาะสำหรับน้องแมว 1-3 ตัวค่ะ
              ️️เหมาะสำหรับน้องเมี้ยวตัวไม่ใหญ่มากน้า️️
              <ul className="list-disc">
                <li>มี5สีให้เลือก เทาอ่อน น้ำตาล เทาเข้ม ฟ้า ครีม</li>
              </ul>
            </div>
            <div className="mt-2 flex justify-center">
              <div className="flex space-x-2">
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">75 cm</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">619 บาท</div>
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">55 cm</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">439 บาท</div>
                  </button>
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

export default Condo;
