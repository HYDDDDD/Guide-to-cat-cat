import React from "react";

function NavBarLogin() {
  return (
    <div className="font-sans w-full m-0">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="hidden sm:flex sm:items-center">
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
            <button className="text-white text-sm font-semibold px-4 py-2 rounded-3xl bg-4-blue hover:text-blue-600 hover:border-blue-600">
              Register
            </button>
          </div>
        </div>

        <div className="block items-center sm:hidden bg-white border-t-2 py-2">
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
            <div className="flex justify-between items-center border-t-2 pt-2">
              <button className="text-black text-sm font-semibold hover:text-blue-600 mr-4">
                English
              </button>
              <button className="text-white text-sm font-semibold px-4 py-2 rounded-3xl bg-4-blue hover:text-blue-600 hover:border-blue-600">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBarLogin;
