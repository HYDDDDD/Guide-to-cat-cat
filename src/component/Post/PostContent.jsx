import React, { useEffect, useState } from "react";
import btnMore from "../Picture/btnMore.png";
import btnLike from "../Picture/like.png";
import btnComment from "../Picture/comment.png";
import CommentPost from "./CommentPost";
import btnLikeRed from "../Picture/HeartRed.png";
import { onSnapshot } from "firebase/firestore";
import { postsQuery } from "../../firebase/firebase-collections";
import DeletePost from "./DeletePost";

function PostContent({ currentUser }) {
  const [clickLike, setClickLike] = useState(false);
  const [postList, setPostList] = useState([]);
  const [idPost, setIdPost] = useState("");
  const [showBtnMore, setShowBtnMore] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    loadPosts();
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

  return (
    <div>
      <div className="mt-4">
        {postList.map((post) => {
          return (
            <div
              key={post.id}
              className="bg-1-blue mt-5 ml-auto mr-auto w-11/12 sm:w-3/4 h-fit rounded-lg"
            >
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <div className="mt-auto mb-auto">
                    <img
                      className="p-2 w-20"
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
                      <button
                        onClick={() => setClickLike((val) => !val)}
                        type="button"
                      >
                        {!clickLike ? (
                          <>
                            <img src={btnLike} alt="" />
                          </>
                        ) : (
                          <>
                            <img src={btnLikeRed} alt="" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <div className="text-center">3</div>
                    <div>
                      <img src={btnComment} alt="" onClick={() => setShowAdd((val) => !val)}/>
                    </div>
                  </div>
                </div>
                <div>
                  <CommentPost showAdd={showAdd} currentUser={currentUser}/>
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
