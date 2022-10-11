import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import Unicharm from "../../Picture/Unicharm-1.png";

function NonClumping({ setStatusNavigate, setStatusCatLitter }) {
  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button
              type="button"
              onClick={() => setStatusCatLitter("catLitter")}
            >
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">
            ทรายแมวชนิด Non-clumping conventional litter :
            ทรายสำหรับแมวไม่จับตัวเป็นก้อน
          </div>
        </div>
        <div className="space-y-10">
          สารแมกนีเซียมออกไซด์เป็นส่วนประกอบหลักในการผลิตทรายชนิดนี้
          ซึ่งมีคุณสมบัติดูดซับของเหลวและความชื้นได้เป็นอย่างดี
          แต่มีข้อเสียตรงที่ไม่สามารถเก็บกลิ่น
          จึงไม่ค่อยได้รับความนิยมในบ้านเราสักเท่าไร
          เนื่องจากการเก็บทำความสะอาดค่อนข้างยุ่งยากค่ะ
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={Unicharm} alt="" />
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
              <div className="font-semibold">Unicharm Pet Deo toilet</div>
              <div className="text-sm lg:ml-0 ml-9">
                <ul className="list-disc">
                  <li>ทรายแมวซีโอไลท์ที่มีคุณสมบัติดูดกลิ่นและแห้งไว</li>
                  <li>ทรายเม็ดใหญ่ ไม่ติดเท้าแมว</li>
                  <li>ลดการเกิดฝุ่น รอบห้องน้ำจึงสะอาดเสมอ</li>
                  <li>2 ลิตร ใช้ได้นาน 1 เดือน*</li>
                  <li>
                    เมื่อใช้ Deo-toilet สำหรับแมว 1 ตัว น้ำหนักไม่เกิน 8 กก
                  </li>
                </ul>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-36 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        แอนตี้แบค 2 L
                      </div>
                    </button>
                    <button
                      className="bg-4-blue w-36 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        209 บาท
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

export default NonClumping;
