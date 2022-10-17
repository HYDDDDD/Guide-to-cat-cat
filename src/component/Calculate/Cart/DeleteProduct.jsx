import { deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { collectionCart } from "../../../firebase/firebase-collections";
import rubbishBin from "../../Picture/rubbishBin.png";

function DeleteProduct(props) {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(props.selectedId);
  });

  const delProduct = async () => {
    const docRef = await doc(collectionCart, props.selectedId);
    await deleteDoc(docRef);
  };

  return (
    <button
      type="button"
      onClick={() => {
        if (props.selectedId) {
          delProduct();
        }
      }}
    >
      <img src={rubbishBin} alt="" />
    </button>
  );
}

export default DeleteProduct;
