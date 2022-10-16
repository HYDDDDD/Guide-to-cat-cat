import React, { useEffect, useState } from "react";
import btnBack from "../../Picture/back.png";
import { onSnapshot } from "firebase/firestore";
import { collectionCart } from "../../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";
import DeleteProduct from "./DeleteProduct";
import ScrollToBottom from "react-scroll-to-bottom";

function Cart(props) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState([]);
  const [selectedId, setSelectedId] = useState("");
  // const totalPrice = 0;

  useEffect(() => {
    loadCart();
  }, []);

  //load products
  const loadCart = () => {
    onSnapshot(collectionCart, (response) => {
      setCart(
        response.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  useEffect(() => {
    summation();
  }, [cart]);

  const summation = () => {
    cart.map(() => {
      const sum = cart
        .map((products) => products.data.price)
        .reduce((prev, current) => {
          return prev + +current;
        });

      console.log(sum);
      setTotalPrice(sum);
    });
    // console.log(totalPrice);
  };

  return (
    <div className="flex justify-center sm:mt-10">
      <div className="sm:h-fit sm:w-4/6 space-y-2 sm:space-y-16 p-4 sm:p-7 sm:border-12 rounded-3xl sm:border-4-blue">
        <div className="flex justify-between space-x-10">
          <button
            type="button"
            onClick={() => props.setStatusNavigate("selectItem")}
          >
            <img src={btnBack} alt="" />
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-5">
          <ScrollToBottom className="lg:h-fit h-650px">
            {cart.map((products) => {
              return (
                <div key={products.id} className="mt-5">
                  <div className="bg-white sm:space-x-10 w-full sm:flex rounded-md">
                    <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
                      <div>
                        <img src={products.data.productPic} alt="" />
                      </div>
                      <div className="flex justify-center mt-1"></div>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between">
                        <div className="font-semibold">
                          {products.data.name}
                        </div>
                        <div onClick={() => setSelectedId(products.id)}>
                          <DeleteProduct selectedId={selectedId} />
                        </div>
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
                      <div className="mt-4 flex justify-center">
                        <div className="space-y-2">
                          <div className="flex space-x-2">
                            <button
                              className="bg-3-blue w-20 px-5 py-1 rounded-md"
                              type="button"
                            >
                              <div className="font-bold text-sm text-white">
                                {products.data.weight}
                              </div>
                            </button>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              className="bg-3-blue w-20 px-5 py-1 rounded-md"
                              type="button"
                            >
                              <div className="font-bold text-sm text-white">
                                {products.data.price}
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </ScrollToBottom>
          <div className="flex justify-center">
            <div className="flex space-x-10 p-2 font-bold text-2xl">
              <div>ราคาสินค้าทั้งหมด</div>
              <div>{totalPrice}</div>
              <div>บาท</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
