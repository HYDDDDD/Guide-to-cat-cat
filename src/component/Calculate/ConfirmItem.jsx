import React, { useEffect, useState } from "react";
import btnBack from "../../component/Picture/back.png";
import { addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";
import {
  collectionCart,
  collectionProducts,
} from "../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";

function ConfirmItem(props) {
  const [ProductList, setProductList] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    loadProducts();
    loadWeight();
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

  const loadWeight = () => {
    if (selectedWeight) {
      console.log(selectedWeight);
    }
  };

  const addCart = async () => {
    if (id !== "") {
      try {
        await addDoc(collectionCart, {
          id: props.currentUser.uid,
          name: props.currentUser.displayName,
          productId: id,
          productWeight: selectedWeight,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error writing new message to Firebase Database", error);
      }
    }

    setId("");
    setSelectedWeight("");
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
                      return (
                        <div key={uuidv4()}>
                          <button
                            className="bg-3-blue w-20 px-5 py-1 rounded-md"
                            type="button"
                            onClick={() => {
                              for (
                                let index = 0;
                                index < products.data.weight.length;
                                index++
                              ) {
                                if (products.data.weight[index] === weight) {
                                  setId(props.productId);
                                  setSelectedWeight(index);
                                }
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
                    <div>{products.data.price[selectedWeight]} บาท</div>
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
            onClick={() => {
              addCart();
              props.setStatusNavigate("cart");
            }}
          >
            ยืนยันสินค้า
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmItem;
