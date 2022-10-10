import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { commentQuery } from "../../firebase/firebase-collections";
import AddComment from "./AddComment";

function CommentPost({ showAdd, currentUser, idPost }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    loadMessages();
  }, []);

  //load messages
  const loadMessages = () => {
    onSnapshot(commentQuery, (response) => {
      setCommentList(
        response.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  return (
    <div>
      <div>
        <ScrollToBottom>
          {commentList
            .filter((comment) => comment.data.idPost === idPost)
            .map((filteredComment) => {
              if (filteredComment.data.text) {
                return (
                  <div key={filteredComment.id}>
                    <div className="flex m-2 space-x-2 bg-2-blue rounded w-11/12 h-fit">
                      <div className="p-1">
                        <img
                          className="w-10"
                          src={filteredComment.data.profilePicUrl}
                          alt=""
                        />
                      </div>
                      <div>
                        <div className="font-bold">
                          {filteredComment.data.name}
                        </div>
                        <div>{filteredComment.data.text}</div>
                      </div>
                    </div>
                    {/* comment
                      <div className="flex ml-8 sm:ml-14 space-x-2 bg-2-blue rounded w-5/6 h-fit">
                        <div className="p-1">
                          <img src={ProfileDennis} alt="" />
                        </div>
                        <div>
                          <div className="font-bold">Dennis Han</div>
                          <div>สามารถซื้อยามาใส่เองได้มั้ยครับ ?</div>
                        </div>
                      </div> */}
                  </div>
                );
              }
            })}
        </ScrollToBottom>
      </div>
      <AddComment showAdd={showAdd} currentUser={currentUser} idPost={idPost} />
    </div>
  );
}

export default CommentPost;
