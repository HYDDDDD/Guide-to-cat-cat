import React from "react";
// import logoInformant from "./logoInformant";

function Register() {
  return (
    <div className="h-screen bg-gradient-to-b from-4-blue via-3-blue/95 to-2-blue/80">
      <div className="w-11/12 h-96 space-y-3">
        <div className="text-white text-5xl ml-8">Register</div>
        <div className="flex h-fit bg-gradient-to-b from-G1-blue to-white rounded-t-3xl">
          <div>
            <form className="w-1/2 items-center">
              <div className="md:w-1/2 px-3">
                <label className="block tracking-wide font-medium mb-2 ml-5">
                  Name
                </label>
                <input
                  className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block tracking-wide font-medium mb-2 ml-5">
                  Date of birth
                </label>
                <input
                  className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block tracking-wide font-medium mb-2 ml-5">
                  Select gender
                </label>
                <input
                  className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block tracking-wide font-medium mb-2 ml-5">
                  Email
                </label>
                <input
                  className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block tracking-wide font-medium mb-2 ml-5">
                  Password
                </label>
                <input
                  className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block tracking-wide font-medium mb-2 ml-5">
                  Password again
                </label>
                <input
                  className="appearance-none block w-64 bg-gray-200 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                />
              </div>
              <div className="">
                <button className="text-white text-sm font-semibold px-4 py-2 rounded-3xl bg-4-blue hover:text-blue-600 hover:border-blue-600">
                  Continue
                </button>
              </div>
            </form>
          </div>
          <div>
            <div>Choose a role</div>
            {/* <div><logoInformant/></div> */}
            <div className="inline-block">
              <div className="flex items-center space-x-4 w-80">
                <hr className="w-24 border border-white" />
                <div className="">Or continue</div>
                <hr className="w-24 border border-white" />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
