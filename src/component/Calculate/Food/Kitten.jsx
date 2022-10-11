import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import MeOPic1 from "../../Picture/me-o-pic1.png";
import WhiskasJunior1 from "../../Picture/Whiskas-junior-1.png";
import cart from "../../Picture/cart.png";

function Kitten({ setStatusNavigate, setStatusFood }) {
  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button type="button" onClick={() => setStatusFood("food")}>
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">อาหารสำหรับแมวเด็ก</div>
        </div>
        <div className="space-y-10">
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={MeOPic1} alt="" />
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
              <div className="font-semibold">Me-o Kitten Food Ocean Fish</div>
              <div className="text-sm lg:ml-0 ml-9">
                อาหารแมวมีโอ ชนิดเม็ด รสปลาทะเล เหมาะสำหรับลูกแมวตั้งแต่
                หย่านมถึง 1 ปี ผลิตจากเนื้อปลาแท้ มีคุณค่าทางสารอาหารตาม
                ความต้องการของลูกแมว อีกทั้งยัง
                <ul className="list-disc">
                  <li>ควบคุมปริมาณโซเดียม</li>
                  <li>ช่วยลดความเสี่ยงโรคไต โรคหัวใจ</li>
                  <li>เจริญเติบโตสมวัย</li>
                  <li>กระตุ้นภูมิคุ้มกันร่างกาย</li>
                  <li>
                    เสริมสร้างกล้ามเนื้อ กระดูก และฟัน บำรุงผิวหนัง ขน และสายตา
                  </li>
                  <li>ป้องกันการเกิดนิ่ว</li>
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
                      <div className="font-bold text-sm text-white">64 บาท</div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">1.1kg</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        190 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">2.8kg</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        230 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">6.8kg</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        499 บาท
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
              <img src={WhiskasJunior1} alt="" />
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
              Whiskas Junior Ocean Fish Flavour with Milk
            </div>
            <div className="text-sm lg:ml-0 ml-9">
              อาหารแมววิสกัส ชนิดเม็ด รสปลาทะเลและนม เหมาะสำหรับลูกแมว อายุ 2-12
              เดือน ผลิตจากวัตถุดิบที่มีคุณภาพ ประกอบด้วย 41 สารอาหารจำเป็นเพื่อ
              <ul className="list-disc">
                <li>ช่วยกระตุ้นการเจริญเติบโตของร่างกาย</li>
                <li>ช่วยให้พลังงาน</li>
                <li>เสริมสร้างระบบภูมิคุ้มกันให้แข็งแรง </li>
              </ul>
            </div>
            <div className="mt-2 flex justify-center">
              <div className="flex space-x-2">
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">450g</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">64 บาท</div>
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">1.1kg</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">190 บาท</div>
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

export default Kitten;
