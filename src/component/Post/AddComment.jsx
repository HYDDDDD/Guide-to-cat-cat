import React, { useState } from "react";
import { addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { collectionPosts } from "../../firebase/firebase-collections";
import { storage } from "../../firebase/firebase-config";

function AddComment({ showAdd, currentUser }) {
  const [currentComment, setCurrentComment] = useState("");
  const [imageUpload, setImageUpload] = useState();

  const saveComment = async () => {
    if (currentComment !== "") {
      try {
        await addDoc(collectionPosts, {
          id: currentUser.uid,
          name: currentUser.displayName,
          imageUrl: null,
          text: currentComment,
          profilePicUrl: currentUser.photoURL,
          timestamp: serverTimestamp(),
        });
        setCurrentComment("");
      } catch (error) {
        console.error("Error writing new message to Firebase Database", error);
      }
    }

    if (imageUpload) {
      try {
        //add message
        const commentRef = await addDoc(collectionPosts, {
          id: currentUser.uid,
          name: currentUser.displayName,
          imageUrl: null,
          profilePicUrl: currentUser.photoURL,
          timestamp: serverTimestamp(),
        });

        //file name show in storage.
        const filePath = `${`Comments`}/${currentUser.uid}/${commentRef.id}`;
        // create reference to file
        const imageRef = ref(storage, filePath);
        //upload file and metadata.
        const fileSnapshot = await uploadBytesResumable(imageRef, imageUpload);

        const publicImageUrl = await getDownloadURL(imageRef);
        await updateDoc(commentRef, {
          imageUrl: publicImageUrl,
          storageUrl: fileSnapshot.metadata.fullPath,
        });

        setImageUpload();
      } catch (error) {
        console.error(
          "There was an error uploading a file to Cloud Storage:",
          error
        );
      }
    }
    setCurrentComment("");
    setImageUpload();
  };

  return (
    <div>
      {showAdd ? (
        <>
          <div>
            <input
              type="text"
              className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
              value={currentComment}
              onChange={(event) => {
                setCurrentComment(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && saveComment();
              }}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AddComment;
