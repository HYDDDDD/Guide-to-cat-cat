import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import Catty from "../../Picture/Catty-1.png";

function Crystal({ setStatusNavigate, setStatusCatLitter }) {
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
          หากทาสแมวคนไหนมีอาการแพ้ฝุ่นจากทรายแมว 2 ชนิดข้างต้น
          ทรายแมวคริสตัลสามารถตอบโจทย์คุณได้เป็นอย่างดีเลยค่ะ เพราะ
          ทรายแมวชนิดนี้ผลิตจากโซเดียม ซิลิเกต (Sodium Silicate)
          ทำให้เนื้อสัมผัสทรายแมวจะเป็นเม็ดเล็ก ๆ เหมือนคริสตัล มีคุณสมบัติ ซึม
          ซับของเสียโดยไม่จับตัวเป็นก้อนและช่วยขจัดกลิ่นได้บางส่วนค่ะ
          ซึ่งการใช้ทรายแมวชนิดนี้จะทำให้ค่อนข้างประหยัด เพราะเราไม่ต้องตักทราย
          เป็นก้อนจำนวนมากทิ้งค่ะ
          แต่ก็มีข้อควรระวังตรงที่ทรายแมวสามารถติดตามตัวและขนของน้องแมวได้
          เพื่อนๆ จึงต้องดูแลรักษาความสะอาด ให้ถ้วนทั่วเป็นพิเศษค่ะ
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={Catty} alt="" />
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
              <div className="font-semibold">Catty cat crystal</div>
              <div className="text-sm lg:ml-0 ml-9">
                Catty Cat ทรายอนามัยสำหรับแมวชนิดคริสตัลผสมเม็ดบีทสีฟ้า
                <ul className="list-disc">
                  <li>ทำจากซิลิก้าเจล มีประสิทธิภาพในการดูดซึมได้เป็นอย่างด</li>
                  <li>ควบคุมกลิ่น</li>
                  <li>กำจัดเชื้อแบคทีเรีย</li>
                  <li>ไม่มีฝุ่น</li>
                  <li>น้ำหนักเบา 1.6 kg/ถุง</li>
                </ul>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-36 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">3.8 L</div>
                    </button>
                    <button
                      className="bg-4-blue w-36 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        119 บาท
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

export default Crystal;
