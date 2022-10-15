import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { collectionCart } from "../../../firebase/firebase-collections";
import rubbishBin from "../../Picture/rubbishBin.png";

function DeleteProduct(props) {
  const delProduct = async () => {
    const docRef = doc(collectionCart, props.ProductId);
    await deleteDoc(docRef);
  };
  return (
    <button type="button" onClick={() => delProduct()}>
      <img src={rubbishBin} alt="" />
    </button>
  );
}

export default DeleteProduct;
