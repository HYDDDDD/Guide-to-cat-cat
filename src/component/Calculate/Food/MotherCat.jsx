import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import RoyalCanin1 from "../../Picture/Royal-canin-1.png";
import Hill from "../../Picture/Hill's-1.png";

function MotherCat({ setStatusNavigate, setStatusFood }) {
  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button type="button" onClick={() => setStatusFood("food")}>
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">อาหารสำหรับแมวท้อง</div>
        </div>
        <div className="space-y-10">
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={RoyalCanin1} alt="" />
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
              <div className="font-semibold">
                Royal Canin Starter Mother & Baby Cat
              </div>
              <div className="text-sm lg:ml-0 ml-9">
                <ul className="list-disc">
                  <li>
                    เสริมสร้างภูมิคุ้มกัน มีกลุ่มสารต้านอนุมูลอิสระ
                    รวมทั้งวิตามินอี ลิขสิทธิ์เฉพาะของโรยัล คานิน
                  </li>
                  <li>
                    ปรับเป็นอาหารกึ่งเหลวได้ เม็ดอาหารดูดซึมน้ำได้ง่าย
                    สามารถปรับ เป็นอาหารกึ่งเหลวได้
                    เหมาะสำหรับลูกแมวช่วงหย่านมที่ฟันเพิ่งขึ้น
                  </li>
                  <li>
                    ดูแลการย่อยอาหารและการขับถ่ายด้วยโปรตีนคุณภาพสูง (L.I.P.*)
                    และพรีไบโอติกส์ (FOS)
                  </li>
                  <li>ช่วยปรับสมดุลแบคทีเรีย และปรับอุจจาระให้เป็นก้อนดี</li>
                  <li>
                    เพิ่ม DHA เสริมพัฒนาการของระบบประสาทและสมองของลูกแมว
                    ตั้งแต่ช่วงแม่แมวตั้งท้อง และให้นม
                  </li>
                </ul>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">400g</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        209 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">2kg</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        799 บาท
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
              <img src={Hill} alt="" />
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
            <div className="font-semibold">Hill's Science Diet</div>
            <div className="text-sm lg:ml-0 ml-9">
              อาหารลูกแมวที่ได้รับการคิดค้นสูตรมาอย่างดี เพื่อพัฒนาการของลูกแมว
              เพื่อพวกเขาจะมีจุดเริ่มต้นของชีวิตที่ดีที่สุดและเติบโตได้อย่างเต็มที่
              <ul className="list-disc">
                <li>มี DHA จากน้ำมันปลาเพื่อพัฒนาการของสมองและสายตา</li>
                <li>โปรตีนคุณภาพสูงเพื่อสร้างกล้ามเนื้อที่แข็งแรง</li>
                <li>มีแร่ธาตุที่สมดุลเพื่อกระดูกและฟันที่แข็งแรง</li>
                <li>เม็ดอาหารรูปแผ่นดิสก์ขนาดเล็ก ขนาดโดยประมาณ 6 x 4 มม.</li>
              </ul>
            </div>
            <div className="mt-2 flex justify-center">
              <div className="flex space-x-2">
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">1.59kg</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">509 บาท</div>
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">4kg</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">1250 บาท</div>
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

export default MotherCat;
