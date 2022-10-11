import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import Kurin from "../../Picture/Kurin-1.png";
import Smart from "../../Picture/Smart-1.png";

function Biodegradable({ setStatusNavigate, setStatusCatLitter }) {
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
            ทรายสำหรับแมวชนิด Biodegradable litter : ทรายของแมวชนิด
            วัสดุธรรมชาติสามารถย่อยสลายเองได้
          </div>
        </div>
        <div className="space-y-10">
          ทรายแมวประเภทนี้ถือว่าเป็นทรายที่ปลอดภัยกับน้องแมวแล้วยังดีต่อโลกของเราด้วยนะคะ
          เพราะผลิตจากวัสดุธรรมชาติที่สามารถ ย่อยสลายได้ ไม่ว่าจะเป็นไม้สน
          ข้าวสาลี เปลือกวอลนัท หญ้าและเต้าหู้ค่ะ มีข้อดีตรงที่มีน้ำหนักเบา
          สามารถกลบกลิ่นเหม็นจากปัสสาวะและ อุจจาระของน้องแมวได้เป็นอย่างดีค่ะ
          ส่วนจุดด้อยของทรายแมวชนิดนี้คือราคาจะค่อนข้างสูง
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={Kurin} alt="" />
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
              <div className="font-semibold">Kurin Kat</div>
              <div className="text-sm lg:ml-0 ml-9">
                แบรนด์ไปเป็นผลการคิดค้นของคณะวิทยาศาสตร์จากจุฬาลงกรณ์
                ที่วัสดุนั้นทำมาจากซังข้าวโพด 100% ตัวนี้จะ
                <ul className="list-disc">
                  <li>ช่วยเรื่องฝุ่นที่ฟุ้งกระจายให้ลดลง</li>
                  <li>เก็บกลิ่นได้ดีมาก ซึมซับในระดับดี</li>
                  <li>เนื้อทรายมีลักษณะเม็ด ไม่ติดเท้าแมว </li>
                  <li>ลดการเลอะเทอะได้ดี</li>
                  <li>เหมาะกับห้องที่อากาศไม่ถ่ายเท</li>
                </ul>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">5 L</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        175 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">10 L</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        325 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">20 L</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        570 บาท
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
              <img src={Smart} alt="" />
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
              Whiskas mackerel flavour perisa kembung
            </div>
            <div className="text-sm lg:ml-0 ml-9">
              วิสกัสอาหารแมวที่อุดมไปด้วยสารอาหารจำเป็นต่อสัตว์เลี้ยงของคุณ
              การันตีด้วยยอดขายอันดับ 1 ในไทย
              <ul className="list-disc">
                <li>ช่วยให้แมวของคุณมีสุขภาพที่แข็งแรง</li>
                <li>มีขนสวยเงางาม สูตรนี้เหมาะสำหรับแมวที่มีอายุ1 ปีขึ้นไป</li>
                <li>
                  น้องแมวที่มีปัญหาเกี่ยวกับโรคนิ่วหรือโรคไต
                  ควรหลีกเลี่ยงเพราะเป็น สูตรที่มีโซเดียมสูง
                  ในกรณีแมวที่สุขภาพแข็งแรงปกติสามารถทานได้
                  แต่คุณอาจจะป้องกันโดยการให้กินน้ำเยอะ ๆ ไม่ต้องตกใจไปนะคะ
                  เพราะ อาหารแมวที่ขายตามท้องตลาดทั่วไปก็จะมีโซเดียมสูงทั้งนั้น
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
                    <div className="font-bold text-sm text-white">1.2kg</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">140 บาท</div>
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">3kg</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">305 บาท</div>
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

export default Biodegradable;
