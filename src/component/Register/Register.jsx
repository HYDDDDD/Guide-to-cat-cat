import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogoInformant from "./LogoInformant";
import LogoSeeker from "./LogoSeeker";
import { auth } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import ProfilePic from "../Picture/ProfilePic.png";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [bdate, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const handleValidation = () => {
    if (name === "") {
      alert("Please enter your name.");
      return false;
    } else if (bdate === "") {
      alert("Please enter your date of birth.");
      return false;
    } else if (gender === "") {
      alert("Please enter your gender.");
      return false;
    } else if (email === "") {
      alert("Please enter your email.");
      return false;
    } else if (password === "") {
      alert("Please enter your password.");
      return false;
    } else if (passwordAgain === "") {
      alert("Please enter your password again.");
      return false;
    }

    if (name.length > 10) {
      alert("Please enter your name less than 10 characters.");
      return false;
    }

    if (password !== passwordAgain) {
      alert("The password is not the same as the password again.");
      return false;
    }

    if (password.length < 6) {
      alert("Password should be at least 6 characters.");
      return false;
    }

    return true;
  };

  const createNewUser = () => {
    if (handleValidation() === true) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
          await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: ProfilePic,
          });

          //console.log(user);
        })
        .catch((error) => error.message);

      setName("");
      setBdate("");
      setGender("");
      setEmail("");
      setPassword("");
      setPasswordAgain("");
      alert("Successful registration.");
      navigate("/");
    }
  };

  return (
    <div className="lg:h-screen overflow-x-hidden bg-gradient-to-b from-4-blue via-3-blue/95 to-2-blue/80">
      <div className="space-y-3">
        <div className="text-white flex text-5xl space-x-2 ml-8 pt-16">
          <div className="flex justify-center">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-3xl bg-2-blue"
            >
              <img
                className="w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/512/467/467274.png"
                alt=""
              />
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
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Date of birth
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={(event) => {
                      setBdate(event.target.value);
                    }}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Select gender
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="md:w-1/2 px-3">
                  <label className="tracking-wide font-medium mb-1 ml-5">
                    Password again
                  </label>
                  <input
                    className="shadow appearance-none border rounded-full w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password"
                    onChange={(event) => {
                      setPasswordAgain(event.target.value);
                    }}
                  />
                </div>
                <div className="lg:ml-24">
                  <button
                    className="text-white text-sm font-semibold px-4 py-2 rounded-3xl bg-4-blue hover:text-blue-600 hover:border-blue-600"
                    type="button"
                    onClick={createNewUser}
                  >
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
