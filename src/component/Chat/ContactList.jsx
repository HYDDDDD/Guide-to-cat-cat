import React from "react";
import ProfilePicMrPrayut from "../Picture/profilePic-MrPrayut.png";
import starBluePic from "../Picture/starBlue.png";

function ContactList({ setShowChatBox, contactList }) {
  // const users = [contactList];
  return (
    <div className="">
      <div className="border-b border-black">
        <div className="text-2xl font-bold drop-shadow-lg shadow-black p-2 ml-5">
          Message
        </div>
      </div>
      <div>
        <form className="flex items-center py-3">
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 right-16 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-black dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-blue-200 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-5/6 ml-auto mr-auto pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required=""
            />
          </div>
        </form>
      </div>
      <div className="w-fit ml-auto mr-auto p-2">
        <button
          className="flex bg-blue-200 justify-center space-x-3 p-4 border border-black rounded-lg"
          type="button"
          onClick={() => setShowChatBox((val) => !val)}
        >
          <div>
            <img src={ProfilePicMrPrayut} alt="" />
          </div>
          <div className="flex lg:space-x-14">
            <div>
              <div className="font-bold">Mr.B</div>
              <div className="">Message</div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-end">
                <img src={starBluePic} alt="" />
              </div>
              <div className="text-sm">12:20pm</div>
            </div>
          </div>
          {/* {users.map((users) => {
            return (
              <div className="flex space-x-3">
                <div>
                  <img src={ProfilePicMrPrayut} alt="" />
                </div>
                <div className="flex lg:space-x-14">
                  <div>
                    <div className="font-bold">Mr.B</div>
                    <div className="">Message</div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-end">
                      <img src={starBluePic} alt="" />
                    </div>
                    <div className="text-sm">12:20pm</div>
                  </div>
                </div>
              </div>
            );
          })} */}
        </button>
      </div>
    </div>
  );
}

export default ContactList;
