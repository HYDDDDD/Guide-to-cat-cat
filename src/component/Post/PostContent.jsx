import React, { useEffect, useState } from "react";
import btnMore from "../Picture/btnMore.png";
import btnLike from "../Picture/like.png";
import btnComment from "../Picture/comment.png";
import CommentPost from "./CommentPost";
import btnLikeRed from "../Picture/HeartRed.png";
import {
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
} from "firebase/firestore";
import {
  collectionLike,
  postsQuery,
} from "../../firebase/firebase-collections";
import DeletePost from "./DeletePost";

function PostContent({ currentUser }) {
  const [clickLike, setClickLike] = useState(false);
  const [postList, setPostList] = useState([]);
  const [idPost, setIdPost] = useState("");
  const [showBtnMore, setShowBtnMore] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    loadPosts();

    // if (clickLike === true) {
    //   addPostLike();
    // }
  }, []);

  const loadPosts = () => {
    onSnapshot(postsQuery, (response) => {
      setPostList(
        response.docs.map((post) => ({
          id: post.id,
          data: post.data(),
          time: new Date(post.data().timestamp.seconds * 1000).toDateString(),
        }))
      );
    });
  };

  // const addPostLike = async () => {
  //   if (clickLike === true && idPost !== "") {
  //     console.log(clickLike);
  //     console.log(idPost);
  //     try {
  //       await addDoc(collectionLike, {
  //         id: currentUser.uid,
  //         idPost: idPost,
  //         name: currentUser.displayName,
  //         photoURL: currentUser.photoURL,
  //         timestamp: serverTimestamp(),
  //       });
  //     } catch (error) {
  //       console.error("Error writing new message to Firebase Database", error);
  //     }
  //   }
  // };

  // const delPostLike = async (id) => {
  //   console.log(id);
  //   const docRef = doc(collectionLike, id);
  //   await deleteDoc(docRef);
  // };

  return (
    <div>
      <div className="mt-4">
        {postList.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-1-blue mt-5 ml-auto mr-auto w-11/12 sm:w-3/4 h-fit rounded-lg"
              onClick={() => setIdPost(post.id)}
            >
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <div className="mt-auto mb-auto">
                    <img
                      className="p-2 sm:w-20 w-14"
                      src={post.data.photoURL}
                      alt="profile_picture"
                    />
                  </div>
                  <div className="mt-auto mb-auto">
                    <div className="font-bold text-lg">{post.data.name}</div>
                    <div>{post.time}</div>
                  </div>
                </div>
                <div className="mt-auto mb-auto px-2">
                  {showBtnMore ? (
                    <>
                      {idPost === post.id ? (
                        <div>
                          <DeletePost
                            idPost={idPost}
                            imagePost={post.data.imagePost}
                            idUser={currentUser.uid}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setShowBtnMore((val) => !val);
                      setIdPost(post.id);
                    }}
                  >
                    <img src={btnMore} alt="" />
                  </button>
                </div>
              </div>
              <div className="ml-7 mt-4">
                <div className="w-3/5 text-start text-sm break-all leading-relaxed tracking-normal font-semibold p-1">
                  {post.data.contentPost}
                </div>
                <div>
                  <img src={post.data.imagePost} alt="" />
                </div>
                <div className="flex space-x-4 mt-2">
                  <div>
                    <div className="text-center">99</div>
                    <div>
                      <button onClick={() => setClickLike(true)} type="button">
                        {/* {!clickLike ? (
                          <>
                            <img
                              src={btnLike}
                              alt=""
                              // onClick={() => addPostLike}
                            />
                          </>
                        ) : (
                          <>
                            {idPost === post.id ? (
                              <>
                                <img
                                  src={btnLikeRed}
                                  alt=""
                                  // onClick={() => delPostLike(post.id)}
                                />
                              </>
                            ) : (
                              <>
                                <img src={btnLike} alt="" />
                              </>
                            )}
                          </>
                        )} */}
                        {clickLike ? (
                          <>
                            {idPost === post.id ? (
                              <>
                                <img
                                  src={btnLikeRed}
                                  alt=""
                                  // onClick={() => delPostLike(post.id)}
                                />
                              </>
                            ) : (
                              <>
                                <img src={btnLike} alt="" />
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            <img src={btnLike} alt="" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">3</div>
                    <div>
                      <img
                        src={btnComment}
                        alt=""
                        onClick={() => setShowAdd((val) => !val)}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  {idPost === post.id ? (
                    <>
                      <CommentPost
                        showAdd={showAdd}
                        currentUser={currentUser}
                        idPost={idPost}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostContent;
