import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import Sando from "../../Picture/Sando-1.png";
import Petory from "../../Picture/Petory-1.png";

function Clumping({ setStatusNavigate, setStatusCatLitter }) {
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
            ทรายแมวชนิด Clumping Litter : ทรายสำหรับแมวจับตัวเป็นก้อน
          </div>
        </div>
        <div className="space-y-10">
          เป็นทรายแมวที่ผลิตจากแร่เบนโทไนต์ (Bentonite)
          ดินเหนียวที่เกิดจากการทับถมของขี้เถ้าภูเขาไฟ
          มีคุณสมบัติในการจับตัวเป็นก้อนเมื่อ สัมผัสกับของเหลวหรือความชื้น
          เวลาเจ้าเหมียวขับถ่ายทั้งเบาและหนัก
          ทรายแมวประเภทนี้จะจับตัวเป็นก้อนรอบ ๆ สิ่งปฏิกูล ทำให้ง่ายและ
          สะดวกต่อการเก็บทำความสะอาด
          กระบะทรายที่เป็นห้องน้ำแมวจะไม่ส่งกลิ่นเหม็นจนเกินไปค่ะ
          โดยทรายแมวชนิดจับตัวเป็นก้อนจะมีราคาถูก
          แต่ก็มีข้อเสียเหมือนกันตรงที่เป็นสารที่ย่อยสลายได้ยากมากค่ะ
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={Sando} alt="" />
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
              <div className="font-semibold">Sando Cat Litter</div>
              <div className="text-sm lg:ml-0 ml-9">
                <ul className="list-disc">
                  <li>ใช้เบ็นโทไนท์บริสุทธิ์จากธรรมชาติ 100%</li>
                  <li>สามารถซึมซับได้อย่างรวดเร็วเมื่อสัมผัสกับน้ำปลอดภัย</li>
                  <li>วัตถุดิบจากธรรมชาติและไม่เป็นพิษ</li>
                  <li>ไม่เป็นอันตรายแม้แต่กับลูกแมว</li>
                  <li>ไม่เป็นอันตรายต่อสุขภาพ</li>
                  <li>
                    ประหยัดขึ้น ด้วยคุณสมบัติพิเศษของเบ็นโทไนท์
                    ที่สามารถซึมซับน้ำได้ มากกว่า 300%
                    ซึ่งเทียบเท่ากับปริมาณของเสียปกติถึงสองเท่า ทำให้ไม่
                    ต้องเปลี่ยนบ่อยและประหยัดมากขึ้น
                  </li>
                </ul>
                โดยทางแบรนด์เคลมว่าคุณจะสามารถเห็นผลลัพธ์ที่พิสูจน์ได้ภายใน 21
                วัน ขนจะดูสวย สุขภาพดีอย่างเห็นได้ชัด มีปริมาณแร่ธาตุที่เหมาะสม
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-36 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        กลิ่นกาแฟ 10 L
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-36 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        กลิ่นเลมอน 10 L
                      </div>
                    </button>
                    <button
                      className="bg-4-blue w-36 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        120 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-40 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        กลิ่นแอปเปิ้ล 10 L
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
              <img src={Petory} alt="" />
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
            <div className="font-semibold">PETORY</div>
            <div className="text-sm lg:ml-0 ml-9">
              ลักษณะเป็นเม็ดเล็กๆโดยมีสารเบนโทไนท์ (Bentonite) เป็นองค์ประกอบ
              หลักซึ่งสามารถซับน้ำได้ดี
              หลักการทำงานของสารเบนโทไนท์คือเมื่อสัมผัส
              กับความชื้นหรือของเหลวจะจับตัวเป็นก้อนแข็ง ทำให้คัดแยกออกง่ายเมื่อ
              ต้องทำความสะอาดกะบะทรายแมว
            </div>
            <div className="mt-2 flex justify-center">
              <div className="flex space-x-2">
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-36 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">
                      กลิ่นกาแฟ 5 L
                    </div>
                  </button>
                  <button
                    className="bg-3-blue w-36 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">
                      กลิ่นลาเวน 5 L
                    </div>
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-36 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">
                      กลิ่นออริ 5 L
                    </div>
                  </button>
                  <button
                    className="bg-3-blue w-36 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">
                      กลิ่นฮันนี่พีช 5 L
                    </div>
                  </button>
                  <button
                    className="bg-4-blue w-36 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">
                      60-80 บาท
                    </div>
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-36 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">
                      กลิ่นเลมอน 5 L
                    </div>
                  </button>
                  <button
                    className="bg-3-blue w-36 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">
                      กลิ่นแอปเปิ้ล 5 L
                    </div>
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

export default Clumping;
