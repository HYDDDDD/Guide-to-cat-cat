import { onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { collectionTotalUser } from "../../firebase/firebase-collections";
import MenuBar from "../Menu/Menu";
import NavigationBar from "../Navigation_bar/NavigationBar";
import AddBar from "./AddBar";
import ContactsMenu from "./ContactsMenu";
import PostContent from "./PostContent";

function Post({ currentUser }) {
  const [user, setUser] = useState([]);
  const [showAddPost, setShowAddPost] = useState(false);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    await onSnapshot(collectionTotalUser, (response) => {
      setUser(
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
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <div className="sm:w-screen mt-16 sm:py-2 lg:ml-64">
            <div className="hidden sm:flex">
              <div className="sm:w-830px">
                {user
                  .filter((idUser) => idUser.data.id === currentUser.uid)
                  .filter(
                    (statusUser) => statusUser.data.status === "Informant"
                  )
                  .map(() => {
                    return (
                      <div key={currentUser.uid}>
                        <AddBar currentUser={currentUser} />
                      </div>
                    );
                  })}
                <PostContent currentUser={currentUser} />
              </div>
              <div className="">
                <ContactsMenu currentUser={currentUser} />
              </div>
            </div>

            <div className="sm:hidden block">
              <div className="">
                {user
                  .filter((idUser) => idUser.data.id === currentUser.uid)
                  .filter(
                    (statusUser) => statusUser.data.status === "Informant"
                  )
                  .map(() => {
                    return (
                      <div key={currentUser.uid}>
                        <AddBar currentUser={currentUser} />
                      </div>
                    );
                  })}
                <PostContent currentUser={currentUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
