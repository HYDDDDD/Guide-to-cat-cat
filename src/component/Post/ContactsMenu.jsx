import React, { useEffect, useState } from "react";
import sug1 from "../Picture/sug1.png";
import btnMore from "../Picture/btnMore.png";
import { collectionTotalUser } from "../../firebase/firebase-collections";
import { onSnapshot } from "firebase/firestore";
import ScrollToBottom from "react-scroll-to-bottom";
import { useNavigate } from "react-router-dom";

function ContactsMenu() {
  const navigate = useNavigate();
  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = () => {
    onSnapshot(collectionTotalUser, (response) => {
      setContactList(
        response.docs.map((contactName) => ({
          id: contactName.id,
          data: contactName.data(),
        }))
      );
    });
  };

  return (
    <div>
      <div className="lg:fixed lg:px-5 p-4 h-screen shadow-xl">
        <div className="font-bold text-xl mt-5">Suggested</div>
        <div>
          <img className="mr-auto ml-auto mt-2" src={sug1} alt="" />
        </div>
        <div className="flex justify-between mt-10">
          <div className="font-bold text-xl">Contacts</div>
          <div>
            <img src={btnMore} alt="" />
          </div>
        </div>
        {/* persons */}
        <div>
          <ScrollToBottom className="h-80">
            {contactList.map((contacts) => {
              return (
                <div key={contacts.id}>
                  <button
                    className="flex w-32 space-x-5 m-5"
                    type="button"
                    onClick={() => navigate("/chat")}
                  >
                    <div>
                      <img src={contacts.data.photoURL} alt="" />
                    </div>
                    <div className="w-full mt-auto mb-auto">
                      {contacts.data.name}
                    </div>
                  </button>
                </div>
              );
            })}
          </ScrollToBottom>
        </div>
      </div>
    </div>
  );
}

export default ContactsMenu;
