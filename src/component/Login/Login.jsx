import React, { useEffect, useState } from "react";
import FormLogin from "./FormLogin";
import Logo from "./Logo";
import NavBarLogin from "./NavBarLogin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

function Login() {
  const [logoBig, setLogoBig] = useState(false);
  const [currentUser, setCurrentUser] = useState([]);

  //Status user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signIn succeed.
        setCurrentUser(user);
      } else {
        //User is not sign-in
        //console.log("User is not sign-in");
      }
    });
  });

  return (
    <div>
      <div className="lg:h-screen bg-gradient-to-b from-G1-blue via-2-blue/95 to-2-blue/80">
        <NavBarLogin />
        <div className="">
          <div className="hidden lg:grid">
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
                <FormLogin formLg={true} />
              </div>
            </div>
          </div>

          <div className="block items-center text-center lg:hidden">
            <div className="flex flex-col mt-4">
              <div className="space-y-2 m-auto">
                <h1 className="text-3xl">
                  Sign In to <br /> Introducing cats
                </h1>
                <div className="ml-10 ">
                  <Logo setLogoBig={setLogoBig} />
                </div>
                <p className="text-base">
                  if you don’t an account <br /> you can Register here!{" "}
                </p>
              </div>
              <div className="mt-3">
                <FormLogin formLg={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
