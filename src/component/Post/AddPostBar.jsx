import React from "react";
import btnPrev from "../Picture/previous 1.png";
import { useNavigate } from "react-router-dom";
import { addDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { collectionPosts } from "../../firebase/firebase-collections";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../firebase/firebase-config";

function AddPostBar({
  currentUser,
  imageUpload,
  contentPost,
  setContentPost,
  setImageUpload,
  setShowSelectFile,
}) {
  const navigate = useNavigate();

  const addPost = async () => {
    if (contentPost !== "") {
      try {
        await addDoc(collectionPosts, {
          id: currentUser.uid,
          name: currentUser.displayName,
          photoURL: currentUser.photoURL,
          contentPost: contentPost,
          imagePost: null,
          timestamp: serverTimestamp(),
        });
      } catch (error) {
        console.error("Error writing new message to Firebase Database", error);
      }
    }

    if (imageUpload) {
      try {
        const postRef = await addDoc(collectionPosts, {
          id: currentUser.uid,
          name: currentUser.displayName,
          photoURL: currentUser.photoURL,
          contentPost: contentPost,
          imagePost: null,
          timestamp: serverTimestamp(),
        });

        const filePath = `${`ContactPosts`}/${currentUser.uid}/${postRef.id}`;
        const imagePostRef = ref(storage, filePath);
        const fileSnapshot = await uploadBytesResumable(
          imagePostRef,
          imageUpload
        );

        const publicImageUrl = await getDownloadURL(imagePostRef);
        await updateDoc(postRef, {
          imagePost: publicImageUrl,
          storageUrl: fileSnapshot.metadata.fullPath,
        });
      } catch (error) {
        console.error("Error add new post to Firebase Database", error);
      }
    }

    setImageUpload();
    setShowSelectFile(false);
    setContentPost("");
    alert("Successful add a post");
    navigate("/post");
  };

  return (
    <div className="fixed bg-4-blue font-sans w-full m-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <button
              className="text-black w-14 h-14 text-sm font-semibold hover:text-blue-600 mr-4"
              onClick={() => navigate("/post")}
            >
              <img src={btnPrev} alt="" />
            </button>
          </div>
          <div className="text-white font-bold">Add a post</div>
          <div>
            <button
              className="text-4-blue font-bold px-4 py-2 rounded bg-G1-blue hover:text-blue-600 hover:border-blue-600"
              onClick={addPost}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPostBar;
