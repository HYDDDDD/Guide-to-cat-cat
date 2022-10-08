import { deleteDoc, doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import React from "react";
import { collectionPosts } from "../../firebase/firebase-collections";
import { storage } from "../../firebase/firebase-config";

function DeletePost(props) {
  const delPost = async () => {
    const docRef = doc(collectionPosts, props.idPost);
    await deleteDoc(docRef);

    if (props.imagePost !== null) {
      //file name show in storage.
      const filePath = `${`ContactPosts`}/${props.idUser}/${props.idPost}`;
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
      <button className="mr-3" onClick={() => delPost()}>
        Delete
      </button>
    </div>
  );
}

export default DeletePost;
