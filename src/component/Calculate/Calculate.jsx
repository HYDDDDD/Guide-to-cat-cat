import React, { useEffect, useState } from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import SelectItem from "./SelectItem";
import Food from "./Food/Food";
import CatLitter from "./CatLitter/CatLitter";
import Toy from "./Toy/Toy";
import Vaccine from "./Vaccine/Vaccine";
import Snack from "./Snack/Snack";
import Other from "./Other/Other";
import Cart from "./Cart/Cart";
import ConfirmItem from "./ConfirmItem";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { collectionCart } from "../../firebase/firebase-collections";

function Calculate({ currentUser }) {
  const [statusNavigate, setStatusNavigate] = useState("selectItem");
  const [idUser, setIdUser] = useState("");
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productPic, setProductPic] = useState();
  const [productDescription, setProductDescription] = useState("");
  const [color, setColor] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productPrice, setProductPrice] = useState("");

  useEffect(() => {
    if (currentUser) {
      setIdUser(currentUser.uid);
    }
  }, []);

  // const addCart = async () => {
  //   if (productId !== "") {
  //     try {
  //       await addDoc(collectionCart, {
  //         id: currentUser.uid,
  //         name: currentUser.displayName,
  //         productId: productId,
  //         productWeight: productWeight,
  //         timestamp: serverTimestamp(),
  //       });
  //     } catch (error) {
  //       console.error("Error writing new message to Firebase Database", error);
  //     }
  //   }

  //   setProductId("");
  //   setProductWeight("");
  //   alert("Successful add a cart");
  // };

  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <div className="w-screen mt-16 py-2 lg:ml-64">
            <div>
              {statusNavigate === "selectItem" ? (
                <>
                  <SelectItem setStatusNavigate={setStatusNavigate} />
                </>
              ) : (
                <>
                  {statusNavigate === "food" ? (
                    <>
                      <Food
                        setStatusNavigate={setStatusNavigate}
                        setProductId={setProductId}
                        setProductName={setProductName}
                        setProductPic={setProductPic}
                        setProductDescription={setProductDescription}
                        setProductWeight={setProductWeight}
                        setProductPrice={setProductPrice}
                      />
                    </>
                  ) : (
                    <>
                      {statusNavigate === "catLitter" ? (
                        <>
                          <CatLitter setStatusNavigate={setStatusNavigate} />
                        </>
                      ) : (
                        <>
                          {statusNavigate === "toy" ? (
                            <>
                              <Toy setStatusNavigate={setStatusNavigate} />
                            </>
                          ) : (
                            <>
                              {statusNavigate === "vaccine" ? (
                                <>
                                  <Vaccine
                                    setStatusNavigate={setStatusNavigate}
                                  />
                                </>
                              ) : (
                                <>
                                  {statusNavigate === "snack" ? (
                                    <>
                                      <Snack
                                        setStatusNavigate={setStatusNavigate}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {statusNavigate === "other" ? (
                                        <>
                                          <Other
                                            setStatusNavigate={
                                              setStatusNavigate
                                            }
                                          />
                                        </>
                                      ) : (
                                        <>
                                          {statusNavigate === "cart" ? (
                                            <>
                                              <Cart
                                                setStatusNavigate={
                                                  setStatusNavigate
                                                }
                                                productId={productId}
                                                productWeight={productWeight}
                                                currentUser={currentUser}
                                              />
                                            </>
                                          ) : (
                                            <>
                                              {statusNavigate ===
                                              "confirmItem" ? (
                                                <>
                                                  <ConfirmItem
                                                    setStatusNavigate={
                                                      setStatusNavigate
                                                    }
                                                    productId={productId}
                                                    currentUser={currentUser}
                                                  />
                                                </>
                                              ) : (
                                                <></>
                                              )}
                                            </>
                                          )}
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
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
    </div>
  );
}

export default Calculate;
