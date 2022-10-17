import React, { useEffect, useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import Purina from "../../Picture/Purina-1.png";
import Lara from "../../Picture/Lara-1.png";
import { onSnapshot } from "firebase/firestore";
import { collectionProducts } from "../../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";

function OldCat({ setStatusNavigate, setStatusFood }) {
  const [ProductList, setProductList] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  //load products
  const loadProducts = () => {
    onSnapshot(collectionProducts, (response) => {
      setProductList(
        response.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  return (
    <div className="flex justify-center lg:mt-10">
      <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button type="button" onClick={() => setStatusFood("food")}>
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">
            อาหารสำหรับแมวที่มีอายุ 7 ปีขึ้นไป
          </div>
        </div>
        <div className="space-y-10">
          <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={Purina} alt="" />
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
              <div className="font-semibold">Purina one vibrant maturity</div>
              <div className="text-sm lg:ml-0 ml-9">
                สูตรนี้จะเป็นการพัฒนามาเพื่อน้องแมวอายุตั้งแต่ 7 ปีขึ้นไป
                ซึ่งภายใน
                อาหารเม็ดจะมีโภชนาการที่ครบถ้วนและบอกได้เลยว่ามีประโยชน์สำหรับ
                แมวสูงอายุมาก ๆ อย่างเช่น โปรตีนที่มาจากเนื้อไก่จะ
                <ul className="list-disc">
                  <li>ช่วยบำรุงหัวใจแข็งแรง กล้ามเนื้อก็จะเกิดความสมส่วน</li>
                  <li>
                    ช่วยบำรุงผิวหนังได้ด้วย เพราะมันจะมีวิตามินและโอเมก้า
                    รวมไปถึง กลูโคซามีนที่ช่วยเรื่องไขข้อ
                    ซึ่งมีความจำเป็นมากสำหรับแมวแก่
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
                        110 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">1.3kg</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        259 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">6kg</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        731 บาท
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
              <img src={Lara} alt="" />
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
            <div className="font-semibold">Lara Senior Cat Food</div>
            <div className="text-sm lg:ml-0 ml-9">
              ลาร่าสูตรแมวแก่ที่มีอายุ 7 ปีขึ้นไป จะใช้เทคโนโลยีขั้นสูงในการผลิต
              ดังนั้นอาหารเม็ดที่ออกมาจะรับประทานได้ง่าย มีความนุ่มและพอดีคำ
              สำหรับแมว ส่วนคุณค่าทางด้านอาหารเองก็ดีไม่แพ้กัน ไม้ว่าจะเป็น
              ทอรีนที่จะเข้าไป
              <ul className="list-disc">
                <li>บำรุงเกี่ยวกับสายตาและโรคหัวใจ </li>
                <li>โปรตีนที่สูงจากเนื้อสัตว์อย่างไก่และไก่งวง </li>
                <li>ไฟเบอร์ซึ่งทำให้การขับถ่ายและการย่อยอาหารดีขึ้น</li>
                <li>ไขมันที่ต่ำป้องกันโรคอ้วนได้เป็นอย่างดี</li>
              </ul>
            </div>
            <div className="mt-2 flex justify-center">
              <div className="flex space-x-2">
                <div className="flex flex-col space-y-2">
                  <button
                    className="bg-3-blue w-20 px-5 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">350g</div>
                  </button>
                  <button
                    className="bg-4-blue w-20 py-1 rounded-md"
                    type="button"
                  >
                    <div className="font-bold text-sm text-white">115 บาท</div>
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
                    <div className="font-bold text-sm text-white">475 บาท</div>
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

export default OldCat;
