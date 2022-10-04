import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { useState } from "react";
import { storage } from "../../firebase/firebase-config";
import { collectionMessagesRef1 } from "../../firebase/firebase-collections";

function DeleteMessage(props) {
  const [showBtnDel, setShowBtnDel] = useState(false);

  const delMessage = async () => {
    const docRef = doc(collectionMessagesRef1, props.idMessage);
    await deleteDoc(docRef);

    if (props.imageUrl !== null) {
      //file name show in storage.
      const filePath = `${props.user.currentUser.uid}/${props.idMessage}`;
      // create reference to file
      const imageRef = ref(storage, filePath);

      // Delete the file
      deleteObject(imageRef)
        .then(() => {
          console.log("File deleted successfully.");
        })
        .catch((error) => error.message);
    }
  };

  return (
    <div>
      {!showBtnDel ? (
        <></>
      ) : (
        <>
          <button className="mr-3" onClick={() => delMessage()}>
            Delete
          </button>
        </>
      )}

      <button className="px-3" onClick={() => setShowBtnDel((val) => !val)}>
        :
      </button>
      <div></div>
    </div>
  );
}

export default DeleteMessage;
