import React from "react";
import btnPrev from "../Picture/previous 1.png";
import { useNavigate } from "react-router-dom";
import { addDoc, serverTimestamp } from "firebase/firestore";
import { collectionPosts } from "../../firebase/firebase-collections";

function AddPostBar({ currentUser, imageUpload, contentPost, setContentPost }) {
  const navigate = useNavigate();

  // Saves a new post to Cloud Firestore.
  const saveContentPost = async () => {
    //Add a new post entry to the Firebase database.
    if (contentPost !== "") {
      try {
        await addDoc(collectionPosts, {
          id: currentUser.uid,
          name: currentUser.displayName,
          text: contentPost,
          picturePost: imageUpload,
          profilePicUrl: currentUser.photoURL,
          timestamp: serverTimestamp(),
        });
        setContentPost("");
      } catch (error) {
        console.error("Error writing new message to Firebase Database", error);
      }
    }
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
              onClick={saveContentPost}
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
