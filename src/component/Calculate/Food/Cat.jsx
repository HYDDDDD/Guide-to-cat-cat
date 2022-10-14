import React, { useEffect, useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import cart from "../../Picture/cart.png";
import { onSnapshot } from "firebase/firestore";
import { collectionProducts } from "../../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";

function Cat({ setStatusNavigate, setStatusFood }) {
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
          <div className="font-bold text-xl">อาหารสำหรับแมวโตเต็มวัย</div>
        </div>
        <div className="space-y-10">
          {ProductList.filter((products) => products.data.type === "food")
            .filter((products) => products.data.typeFood === "cat")
            .map((products) => {
              return (
                <div
                  key={products.id}
                  className="bg-white sm:space-x-10 w-full sm:flex rounded-md"
                >
                  <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
                    <div>
                      <img src={products.data.productPic} alt="" />
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
                      {products.data.productName}
                    </div>
                    <div className="text-sm lg:ml-0 ml-9">
                      {products.data.description}
                      {
                        <ul className="list-disc">
                          {products.data.descriptionList.map((element) => {
                            return <li key={uuidv4()}>{element}</li>;
                          })}
                        </ul>
                      }
                    </div>
                    <div className="mt-2 flex justify-center">
                      <div className="space-y-2">
                        <div className="flex space-x-2">
                          {products.data.weight.map((weight) => {
                            return (
                              <div key={uuidv4()}>
                                <button
                                  className="bg-3-blue w-20 px-5 py-1 rounded-md"
                                  type="button"
                                >
                                  <div className="font-bold text-sm text-white">
                                    {weight}
                                  </div>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex space-x-2">
                          {products.data.price.map((price) => {
                            return (
                              <div
                                key={uuidv4()}
                                className="flex flex-col space-y-2"
                              >
                                <button
                                  className="bg-4-blue w-20 py-1 rounded-md"
                                  type="button"
                                >
                                  <div className="font-bold text-sm text-white">
                                    {price} บาท
                                  </div>
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {/* <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
            <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
              <div>
                <img src={Royal} alt="" />
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
              <div className="font-semibold">Royal Canin Hair & Skin Care</div>
              <div className="text-sm lg:ml-0 ml-9">
                สำหรับแมวอายุ 1 ปีขึ้นไป เป็นสูตรเพื่อดูแล และบำรุงผิวหนัง
                และเส้นขน ของเจ้าเหมียวโดยเฉพาะ
                ด้วยส่วนผสมของกรดอะมิโนเฉพาะและOmega 3 (EPA & DHA)
                ในโปรตีนคุณภาพสูงที่ใช้ในการทำอาหารเม็ด
                <ul className="list-disc">
                  <li>
                    ช่วยบำรุงผิวหนังและเส้นขนของเจ้าเหมียวให้นุ่มสลวยสุขภาพดี
                  </li>
                  <li>
                    ช่วยเสริมเกราะป้องกันให้ผิวหนังของเจ้าเหมียวคงความชุ่มชื้น
                  </li>
                  <li>ช่วยดูแลสุขภาพทางเดินปัสสาวะ</li>
                  <li>
                    ช่วยป้องกันการแห้งลอก หรือปัญหาโรคผิวหนังอื่น ๆ
                    ของเจ้าเหมียวได้
                  </li>
                </ul>
                โดยทางแบรนด์เคลมว่าคุณจะสามารถเห็นผลลัพธ์ที่พิสูจน์ได้ภายใน 21
                วัน ขนจะดูสวย สุขภาพดีอย่างเห็นได้ชัด มีปริมาณแร่ธาตุที่เหมาะสม
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
                        154 บาท
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
                        790 บาท
                      </div>
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
                      <div className="font-bold text-sm text-white">
                        1420 บาท
                      </div>
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <button
                      className="bg-3-blue w-20 px-5 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">10kg</div>
                    </button>
                    <button
                      className="bg-4-blue w-20 py-1 rounded-md"
                      type="button"
                    >
                      <div className="font-bold text-sm text-white">
                        2730 บาท
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
          <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
            <div>
              <img src={WhiskasMackerel1} alt="" />
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
        </div> */}

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

export default Cat;
