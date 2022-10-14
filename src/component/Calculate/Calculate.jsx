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

  // const addItem

  // const addPost = async () => {
  //   if (contentPost !== "") {
  //     try {
  //       await addDoc(collectionPosts, {
  //         id: currentUser.uid,
  //         name: currentUser.displayName,
  //         photoURL: currentUser.photoURL,
  //         contentPost: contentPost,
  //         imagePost: null,
  //         timestamp: serverTimestamp(),
  //       });
  //     } catch (error) {
  //       console.error("Error writing new message to Firebase Database", error);
  //     }
  //   }

  //   if (imageUpload) {
  //     try {
  //       const postRef = await addDoc(collectionPosts, {
  //         id: currentUser.uid,
  //         name: currentUser.displayName,
  //         photoURL: currentUser.photoURL,
  //         contentPost: contentPost,
  //         imagePost: null,
  //         timestamp: serverTimestamp(),
  //       });

  //       const filePath = `${`ContactPosts`}/${currentUser.uid}/${postRef.id}`;
  //       const imagePostRef = ref(storage, filePath);
  //       const fileSnapshot = await uploadBytesResumable(
  //         imagePostRef,
  //         imageUpload
  //       );

  //       const publicImageUrl = await getDownloadURL(imagePostRef);
  //       await updateDoc(postRef, {
  //         imagePost: publicImageUrl,
  //         storageUrl: fileSnapshot.metadata.fullPath,
  //       });
  //     } catch (error) {
  //       console.error("Error add new post to Firebase Database", error);
  //     }
  //   }

  //   setImageUpload();
  //   setShowSelectFile(false);
  //   setContentPost("");
  //   alert("Successful add a post");
  //   navigate("/post");
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
                                                    // productName={productName}
                                                    // productPic={productPic}
                                                    // productDescription={
                                                    //   productDescription
                                                    // }
                                                    // productWeight={
                                                    //   productWeight
                                                    // }
                                                    // productPrice={productPrice}
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
