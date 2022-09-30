import React from "react";
import { useNavigate } from "react-router-dom";
import LogoInformant from "./LogoInformant";
import LogoSeeker from "./LogoSeeker";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="lg:h-screen overflow-x-hidden bg-gradient-to-b from-4-blue via-3-blue/95 to-2-blue/80">
      <div className="space-y-3">
        <div className="text-white flex text-5xl space-x-2 ml-8 pt-16">
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-3xl bg-2-blue"
            >
              <img className="w-5 h-5" src="https://cdn-icons-png.flaticon.com/512/467/467274.png" alt=""/>
            </button>
          </div>
          <div>Register</div>
        </div>
        <div className="flex justify-center">
          <div className="lg:flex h-fit w-9/12 lg:w-8/12 justify-center bg-gradient-to-b from-G1-blue to-white rounded-t-3xl lg:p-3">
            <div>
              <form className="flex flex-col justify-center items-center space-y-4">
                <div className="md:w-1/2 md:flex md:flex-col px-3">
                  <label className="block tracking-wide font-medium mb-1 ml-5">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Date of birth
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Select gender
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Password again
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                  />
                </div>
                <div className="lg:ml-24">
                  <button className="text-white text-sm font-semibold px-4 py-2 rounded-3xl bg-4-blue hover:text-blue-600 hover:border-blue-600">
                    Continue
                  </button>
                </div>
              </form>
            </div>
            <div className="text-center mt-5">
              <div>Choose a role</div>
              <div className="flex justify-center">
                <LogoInformant />
              </div>
              <div className="inline-block">
                <div className="flex items-center w-72">
                  <hr className="w-24 border border-white" />
                  <div className="">Or continue</div>
                  <hr className="w-24 border border-white" />
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <LogoSeeker />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
