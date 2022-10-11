import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import CatFallLove from "../../Picture/CatFallLove-1.png";
import CatFallBell from "../../Picture/CatFallBell-1.png";

function CatFall({ setStatusNavigate, setStatusToy }) {
  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button type="button" onClick={() => setStatusToy("toy")}>
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">ไม้ตกแมว</div>
        </div>
        <div className="space-y-10">
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={CatFallLove} alt="" />
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
              <div className="font-semibold">ไม้ตกแมว Love Love</div>
              <div className="text-sm lg:ml-0 ml-9">
                ไม้ตกแมว น้องแมว Love Love
                <ul className="list-disc">
                  <li>ขนนก น้องแมวช๊อบ ชอบ</li>
                  <li>ขนาดความยาว (รวมขนนก) ประมาณ 60 เซนติเมตร</li>
                  <li>ความยาวก้านจับ : 30 เซนติเมตร</li>
                  <li>ขนนก : คละสี</li>
                  <li>ขนนก : มีกระดิ่งไม้ตกแมว สามารถม้วนได้ ยาวสุดๆๆๆๆ</li>
                </ul>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-24 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">30 cm</div>
                    </button>
                    <button
                      className="bg-4-blue w-24 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">59 บาท</div>
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
              <img src={CatFallBell} alt="" />
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
            <div className="font-semibold">ไม้ตกแมวมีกระดิ่ง</div>
            <div className="text-sm lg:ml-0 ml-9">
              ️ความยาวแท่ง: 40 ซม ความยาวเชือกยางยืด: ประมาณ 60 ซม
              <ul className="list-disc">
                <li>
                  คุณสมบัติ: ของเล่นสำหรับสัตว์เลี้ยงทำจากไม้คุณภาพสูงและมีขน
                  ที่สวยงามซึ่งสามารถดึงดูดความสนใจของลูกแมว รูปแบบของแมวตลก
                  น่ารักมากเส้นใหญ่ลายบนเส้นเดียวกันกับเส้นใหญ่บนกระดานข่วนเหมาะ
                  สำหรับข่วนแมว ของเล่นแบบนี้จะทำให้พวกเขามีความสุขมาก สามารถ
                  ส่งเสริมความสัมพันธ์ที่ใกล้ชิดระหว่างลูกแมวกับเจ้าของ
                  แมวตัวตลกตัว นี้ราคาถูกและคุณภาพดี
                </li>
              </ul>
            </div>
            <div className="mt-2 flex justify-center">
              <div className="flex flex-col space-y-2">
                <div className="space-x-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">ม่วง</div>
                  </button>
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">เทา</div>
                  </button>
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">ชมพู</div>
                  </button>
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">ฟ้า</div>
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">619 บาท</div>
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

export default CatFall;
