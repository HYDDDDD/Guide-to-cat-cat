import React, { useEffect, useState } from "react";
import iconCart from "../../component/Picture/iconCart.png";
import btnBack from "../../component/Picture/back.png";
import cart from "../../component/Picture/cart.png";
import { onSnapshot } from "firebase/firestore";
import { collectionProducts } from "../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";

function ConfirmItem(props) {
  const [ProductList, setProductList] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState("");

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
    <div className="flex justify-center mt-10">
      <div className="sm:w-4/6 space-y-10 sm:space-y-16 p-4 sm:p-7 border-12 rounded-3xl border-4-blue">
        <div className="flex space-x-5">
          <button
            type="button"
            onClick={() => props.setStatusNavigate("selectItem")}
          >
            <img src={btnBack} alt="" />
          </button>
          <div className="font-bold text-xl">ยืนยันสินค้า</div>
        </div>
        <div className="flex justify-center space-x-10">
          {ProductList.filter(
            (productId) => props.productId === productId.id
          ).map((products) => {
            return (
              <div key={products.id} className="w-1/2">
                <div>
                  <img src={products.data.productPic} alt="" />
                </div>
                <div>
                  <div>{products.data.productName}</div>
                  <div>{products.data.description}</div>
                  <div className="ml-7">
                    {
                      <ul className="list-disc">
                        {products.data.descriptionList.map((element) => {
                          return <li key={uuidv4()}>{element}</li>;
                        })}
                      </ul>
                    }
                  </div>
                  <div className="flex space-x-2 mt-10">
                    {products.data.weight.map((weight) => {
                      console.log(weight);
                      return (
                        <div key={uuidv4()}>
                          <button
                            className="bg-3-blue w-20 px-5 py-1 rounded-md"
                            type="button"
                            onClick={() => {
                              if (weight) {
                                setSelectedWeight(weight);
                              }
                            }}
                          >
                            <div className="font-bold text-sm text-white">
                              {weight}
                            </div>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between mt-10 font-bold text-lg">
                    <div>ราคา</div>
                    <div>
                      {selectedWeight === "400g" ? (
                        <>{products.data.price[0]} บาท</>
                      ) : (
                        <>
                          {selectedWeight === "1.1kg" ? (
                            <>{products.data.price[1]} บาท</>
                          ) : (
                            <>
                              {selectedWeight === "2.8kg" ? (
                                <>{products.data.price[2]} บาท</>
                              ) : (
                                <>
                                  {selectedWeight === "6.8kg" ? (
                                    <>{products.data.price[3]} บาท</>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-3-blue text-white w-32 px-5 py-2 rounded-md"
            type="button"
          >
            ยืนยันสินค้า
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmItem;
