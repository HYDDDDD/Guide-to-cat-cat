import React, { useEffect, useState } from "react";
import btnBack from "../../Picture/back.png";
import { onSnapshot } from "firebase/firestore";
import {
  collectionCart,
  collectionProducts,
} from "../../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";
import DeleteProduct from "./DeleteProduct";
import rubbishBin from "../../Picture/rubbishBin.png";

function Cart(props) {
  // console.log(props.productId);
  const [cart, setCart] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [Products, setProducts] = useState([]);
  const [selectedWeight, setSelectedWeight] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [ProductId, setProductId] = useState("");
  const result = [];

  useEffect(() => {
    loadCart();
    loadProducts();
    // price();
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

  //load products
  const loadProducts = () => {
    onSnapshot(collectionProducts, (response) => {
      setProducts(
        response.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  useEffect(() => {
    findIdProduct();
  }, [cart]);

  const findIdProduct = () => {
    try {
      setSelectedWeight(
        cart.map((products) => ({
          id: products.data.productId,
          weight: products.data.productWeight,
        }))
      );
      // selectedWeight.map((selected) => console.log(selected.seleted));

      cart
        .filter((user) => user.data.id === props.currentUser.uid)
        .filter((cart) =>
          Products.filter(
            (products) => products.id === cart.data.productId
          ).map((productsList) => {
            result.push(productsList);
          })
        );

      setProductList(result);
    } catch (error) {
      console.error("Error : ", error);
    }
  };

  // const price = () => {
  //   setCurrentPrice(
  //     ProductList.map((products) => {
  //       selectedWeight.filter((price) => price.id === products.id);
  //     })
  //   );

  //   setTotalPrice(currentPrice.reduce((prev, current) => prev + current));
  //   console.log(totalPrice);
  // };

  return (
    <div className="flex justify-center mt-10">
      <div className="sm:w-4/6 space-y-10 sm:space-y-16 p-4 sm:p-7 sm:border-12 rounded-3xl sm:border-4-blue">
        <div className="flex justify-between space-x-10">
          <button
            type="button"
            onClick={() => props.setStatusNavigate("selectItem")}
          >
            <img src={btnBack} alt="" />
          </button>
        </div>
        <div className="flex flex-col justify-between space-y-5">
          {ProductList.map((products) => {
            return (
              <div
                key={products.id}
                className="bg-white sm:space-x-10 w-full sm:flex rounded-md"
                onClick={() => {
                  // const selectedId = cart
                  //   .filter((user) => user.data.id === props.currentUser.uid)
                  //   .filter((id) => id.data.productId === products.id)
                  //   .map((productId) => productId.id);

                  // console.log(selectedId);
                  // setProductId(selectedId);
                  // console.log(ProductId);
                }}
              >
                <div className="sm:mt-auto sm:mb-auto sm:w-3/4 flex flex-col justify-center">
                  <div>
                    <img src={products.data.productPic} alt="" />
                  </div>
                  <div className="flex justify-center mt-1"></div>
                </div>
                <div className="mt-2">
                  <div className="flex justify-between">
                    <div className="font-semibold">
                      {products.data.productName}
                    </div>
                    <div>
                      <DeleteProduct ProductId={ProductId} />
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
                  <div className="mt-2 flex justify-center">
                    <div className="space-y-2">
                      <div className="flex space-x-2">
                        {selectedWeight
                          .filter((weight) => weight.id === products.id)
                          .map((weight) => {
                            return (
                              <div key={uuidv4()}>
                                <button
                                  className="bg-3-blue w-20 px-5 py-1 rounded-md"
                                  type="button"
                                >
                                  <div className="font-bold text-sm text-white">
                                    {products.data.weight[weight.weight]}
                                  </div>
                                </button>
                              </div>
                            );
                          })}
                      </div>
                      <div className="flex space-x-2">
                        {selectedWeight
                          .filter((price) => price.id === products.id)
                          .map((price) => {
                            // console.log(products.data.price[price.weight]);
                            return (
                              <div key={uuidv4()}>
                                <button
                                  className="bg-3-blue w-20 px-5 py-1 rounded-md"
                                  type="button"
                                >
                                  <div className="font-bold text-sm text-white">
                                    {products.data.price[price.weight]}
                                  </div>
                                </button>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end">
                    {/* {console.log(totalPrice)} */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Cart;
