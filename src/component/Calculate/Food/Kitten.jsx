import React, { useEffect, useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import { v4 as uuidv4 } from "uuid";
import cart from "../../Picture/cart.png";
import { onSnapshot } from "firebase/firestore";
import { collectionProducts } from "../../../firebase/firebase-collections";

function Kitten(props) {
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
            <button
              type="button"
              onClick={() => props.setStatusFood("food")}
            >
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">อาหารสำหรับแมวเด็ก</div>
        </div>
        <div className="space-y-10">
          {ProductList.filter((products) => products.data.type === "food")
            .filter((products) => products.data.typeFood === "kitten")
            .map((products) => {
              return (
                <div
                  key={products.id}
                  className="bg-white sm:space-x-10 w-full sm:flex rounded-md"
                  onClick={() => {
                    props.setProduct.setProductId(products.id);
                    props.setProduct.setStatusNavigate("confirmItem");
                  }}
                >
                  <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
                    <div>
                      <img src={products.data.productPic} alt="" />
                    </div>
                    <div className="flex justify-center mt-1">
                      <button
                        className=" bg-2-blue flex p-2 space-x-2 rounded-md"
                        type="button"
                        // onClick={() => {
                        //   setProductId(products.id);
                        //   setProductName(products.data.productName);
                        //   productPic(products.data.productPic);
                        //   productDescription(products.data.descriptionList);
                        //   productWeight(products.data.weight);
                        //   productPrice(products.data.price);
                        // }}
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
        </div>

        <div>
          <div className="flex justify-end mt-10">
            <button
              type="button"
              onClick={() => props.setProduct.setStatusNavigate("cart")}
            >
              <img className="sm:w-28 w-20" src={iconCart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kitten;
