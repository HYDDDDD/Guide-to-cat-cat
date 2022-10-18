import React from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";
import { useNavigate } from "react-router-dom";
import btnBack from "../Picture/back.png";

function Logout() {
  const navigate = useNavigate();
  //Sign out
  const signOutWithEmail = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        alert("Sign-out successful.");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
        </div>
        <div className="flex justify-center lg:space-x-5 mt-5 ml-20">
          <div className="flex space-x-1 sm:space-x-28">
            <div className="mt-5">
              <div className="flex space-x-5">
                <button
                  className="flex space-x-"
                  type="button"
                  onClick={() => navigate("/setting")}
                >
                  <img src={btnBack} alt="" />
                </button>
                <div className="font-bold text-2xl">ออกจากระบบ</div>
              </div>

              <div className="font-bold text-xl mt-4">
                คุณต้องการออกจากระบบใช่หรือไม่
              </div>

              <button
                className=" mt-7 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                onClick={() => {
                  signOutWithEmail();
                  navigate("/");
                }}
              >
                ใช่
              </button>
              <button className=" mt-7 ml-10 px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                ไม่
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
