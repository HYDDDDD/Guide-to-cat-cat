import React, { useEffect, useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import { onSnapshot } from "firebase/firestore";
import { collectionCart } from "../../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";

function Cart(props) {
  const [ProductList, setProductList] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  //load products
  const loadProducts = () => {
    onSnapshot(collectionCart, (response) => {
      setProductList(
        response.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  console.log(props);
  return (
    <div className="flex justify-center mt-10">
      <div className="sm:w-4/6 space-y-10 sm:space-y-16 p-4 sm:p-7 border-12 rounded-3xl border-4-blue">
        <div className="flex justify-between space-x-10">
          <button
            type="button"
            onClick={() => props.setStatusNavigate("selectItem")}
          >
            <img src={btnBack} alt="" />
          </button>
          Cart
        </div>
        <div className="flex justify-between space-x-10">
          {/* {ProductList.filter((products) => products.data.type === "food")
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
                    <div className="flex justify-center mt-1"></div>
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
            })} */}
          {ProductList.filter(
            (products) => products.data.id === props.currentUser
          ).map((products) => {
            console.log(products);
          })}
        </div>
        <div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => props.setStatusNavigate("cart")}
            >
              <img className="sm:w-full w-20" src={iconCart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
