import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { postsQuery } from "../../firebase/firebase-collections";
import ProfileDennis from "../Picture/profilePic-Dennis.png";
import AddComment from "./AddComment";

function CommentPost({ showAdd, currentUser }) {
  const [commentList, setCommentList] = useState([]);
  const [idText, setIdText] = useState("");

  useEffect(() => {
    loadMessages();
  }, []);

  //load messages
  const loadMessages = () => {
    onSnapshot(postsQuery, (response) => {
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
          {commentList.map((comment) => {
            console.log(comment);
            if (comment.data.text) {
              return (
                <div key={comment.id}>
                  <div className="flex m-2 space-x-2 bg-2-blue rounded w-11/12 h-fit">
                    <div className="p-1">
                      <img
                        className="w-10"
                        src={comment.data.photoURL}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="font-bold">{comment.data.name}</div>
                      <div>{comment.data.text}</div>
                    </div>
                  </div>
                  {/* <div className="flex ml-8 sm:ml-14 space-x-2 bg-2-blue rounded w-5/6 h-fit">
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
        {/* <div className="flex m-2 space-x-2 bg-2-blue rounded w-11/12 h-fit">
          <div className="p-1">
            <img src={ProfileDennis} alt="" />
          </div>
          <div>
            <div className="font-bold">Dennis Han</div>
            <div>สามารถซื้อยามาใส่เองได้มั้ยครับ ?</div>
          </div>
        </div>
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
      <AddComment showAdd={showAdd} currentUser={currentUser} />
    </div>
  );
}

export default CommentPost;
