import React, { useEffect, useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import { onSnapshot } from "firebase/firestore";
import {
  collectionCart,
  collectionProducts,
} from "../../../firebase/firebase-collections";
import { v4 as uuidv4 } from "uuid";

function Cart(props) {
  // console.log(props.productId);
  const [cart, setCart] = useState([]);
  const [ProductList, setProductList] = useState([]);
  const [ProductId, setProductId] = useState([]);
  const [Products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  useEffect(() => {
    loadCart();
    loadProducts();
    findIdProduct();
    // console.log(Products);
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

  const findIdProduct = () => {
    setProductId(
      cart
        .filter((user) => user.data.id === props.currentUser.uid)
        .map((products) => ({
          id: products.data.productId,
        }))
    );

    setFilterProduct(
      ProductId.filter((cart) =>
        Products.filter((products) => cart.id === products.id).map(
          (products) => products
        )
      )
    );

    // for (let index = 0; index < filterProduct.length; index++) {
    //   const element = filterProduct[index];

    //   setProductList(
    //     Products.filter((products) => products.id === element.id).map(
    //       (element) => element
    //     )
    //   );
    // }

    // setProductList(
    //   filterProduct.map((product) => {
    //     Products.filter((products) => products.id === product.id).map(
    //       (element) => {
    //         return element;
    //       }
    //     );
    //   })
    // );

    filterProduct.map((product) => {
      Products.filter((products) => products.id === product.id).map(
        (products) => {
          return products;
        }
      );
    });
  };

  // console.log(ProductList);
  // console.log(ProductId);
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
          {cart
            .filter((idUser) => idUser.data.id === props.currentUser.uid)
            .filter((idProduct) => {
              // console.log(idProduct.data.productId);
              filterProduct.forEach((element) => {
                console.log(element);
              });
            })}

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
          {/* {ProductList.filter(
            (products) => products.data.id === props.currentUser
          ).map((products) => {
            console.log(products);
          })} */}
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
