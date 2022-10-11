import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import PetEnjoy from "../../Picture/PetEnjoy-1.png";
import BigTunnel from "../../Picture/BigTunnel-1.png";

function CatTunnel({ setStatusNavigate, setStatusToy }) {
  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button type="button" onClick={() => setStatusToy("toy")}>
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">อุโมงค์แมว</div>
        </div>
        <div className="space-y-10">
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={PetEnjoy} alt="" />
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
              <div className="font-semibold">PetEnjoy Pro</div>
              <div className="text-sm lg:ml-0 ml-9">
                สำหรับแมววิ่งเล่นซ่อนแอบ มีลูกบอลห้อย 1 ลูก สำหรับให้แมวตบเล่น
                พับเก็บได้ ช่วยให้น้องแมวออกกำลังกายอย่างสนุก คลายเคลียดน้องแมว
                ลดพฤติกรรมก้าวร้าว
                อุโมงค์เล่นนุ่มยุบนี้เหมาะสำหรับสัตว์เลี้ยงขนาดเล็กทั้งหมดรวมถึง:
                กระต่าย, ferrets,และลูกสุนัขขนาดเล็กและลูกแมว
                <ul className="list-disc">
                  <li>
                    สัตว์เลี้ยงจะรักการเล่นในอุโมงค์นี้วิ่งไปมาสำรวจ
                    มีสถานที่หลบซ่อน ตัวของตัวเองและร่มเงาจากดวงอาทิตย์
                    ง่ายต่อการเช็ดทำความสะอาด และพับ
                    ดังนั้นจึงเป็นเรื่องง่ายที่จะเก็บไว้เมื่อไม่ได้ใช้งาน ขนาด:
                    78x25 ซม.
                  </li>
                </ul>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="flex space-x-2">
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-28 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        78x25 cm
                      </div>
                    </button>
                    <button
                      className="bg-4-blue w-28 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">32 บาท</div>
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
              <img src={BigTunnel} alt="" />
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
            <div className="font-semibold">อุโมงค์แมวขนาดใหญ่</div>
            <div className="text-sm lg:ml-0 ml-9">
              ️️แมวอ้วนมากๆ สามารถเล่นได้(แมวเล็ก-11กิโล)
              <ul className="list-disc">
                <li>ขนาด 72*52cm</li>
                <li>ท่ออุโมงค์ยืดได้ยาว130cm</li>
                <li>ขนาดอุโมงกว้าง 23cm</li>
                <li>เนื้อผ้านุ่มมากๆ</li>
                <li>ทีนอนด้านหน้าสามารถถอดแยกจากอุโมงค์ได</li>
                <li>ด้านหน้าอุโมงค์มีบอล 1ลูก</li>
              </ul>
            </div>
            น้องแมวเบื่อ สามารถพับเก็บได้ สามารถซักได้ปกติ
            <div className="mt-2 flex justify-center">
              <div className="flex flex-col space-y-2">
                <div className="space-x-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">เหลือง</div>
                  </button>
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">ชมพู</div>
                  </button>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">345 บาท</div>
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

export default CatTunnel;
