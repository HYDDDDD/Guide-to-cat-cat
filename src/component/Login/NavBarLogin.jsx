import React from "react";
import { useNavigate } from "react-router-dom";

function NavBarLogin() {
  const navigate = useNavigate();

  return (
    <div className="font-sans w-full m-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between py-4">
          <div className="hidden sm:flex sm:items-center">
            <button
              className="text-black text-sm font-semibold hover:text-blue-600 mr-4"
              type="button"
            >
              Home
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              About
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              Blog
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              Pages
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600">
              Contact
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center">
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              English
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              Sign in
            </button>
            <button
              className="text-white text-sm font-semibold px-4 py-2 rounded-3xl bg-4-blue hover:text-blue-600 hover:border-blue-600"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>

        {/* <div className="block items-center sm:hidden  border-t-2 py-2">
          <div className="flex flex-col">
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              Home
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              About
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              Blog
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              Pages
            </button>
            <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
              Contact
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default NavBarLogin;
