// import React, { useState } from "react";
// import { auth } from "../../firebase/firebase-config";
import FormLogin from "./FormLogin";
import Logo from "./Logo";
import NavBarLogin from "./NavBarLogin";

function Login() {
  // const [currentUser, setCurrentUser] = useState([]);

  //Sign in 

  return (
    <div className="h-screen bg-gradient-to-b from-G1-blue via-G2-blue/95 to-G2-blue/80">
      <NavBarLogin />
      <div className="">
        <div className="hidden sm:grid">
          <div className="grid grid-cols-2">
            <div className="mt-14 ml-20">
              <div className="space-y-10">
                <h1 className="text-5xl">
                  Sign In to <br /> Introducing cats
                </h1>
                <p className="text-lg">
                  if you don’t an account <br /> you can Register here!{" "}
                </p>
              </div>
              <div className="ml-44 -mt-20">
                <Logo />
              </div>
            </div>
            <div className="mt-32">
              <FormLogin />
            </div>
          </div>
        </div>

        <div className="block items-center text-center sm:hidden bg-white border-t-2 py-2">
          <div className="flex flex-col mt-3">
            <div className="space-y-10 m-auto">
              <h1 className="text-5xl">
                Sign In to <br /> Introducing cats
              </h1>
              <p className="text-lg">
                if you don’t an account <br /> you can Register here!{" "}
              </p>
              <div>{/* logo */}</div>
            </div>
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
