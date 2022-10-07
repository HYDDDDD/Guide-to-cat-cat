import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, serverTimestamp } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collectionTotalUser } from "../../firebase/firebase-collections";
import { auth } from "../../firebase/firebase-config";
import ProfilePic from "../Picture/ProfilePic.png";
import RoleRegister from "./RoleRegister";

function FormRegister({ currentUser }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("Seeker");
  const [name, setName] = useState("");
  const [bdate, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [statusCreate, setStatusCreate] = useState(false);

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
    } else if (status === "") {
      alert("Please select your status again.");
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

  useEffect(() => {
    if (statusCreate === true) {
      addUser();
    }
  });

  const createNewUser = async () => {
    if (handleValidation() === true) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (user) => {
          await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: ProfilePic,
            status: status,
          });
        })
        .catch((error) => error.message);

      setStatusCreate(true);
      alert("Successful registration.");
    }
  };

  const addUser = async () => {
    try {
      await addDoc(collectionTotalUser, {
        id: currentUser.uid,
        name: name,
        photoURL: ProfilePic,
        status: status,
        timestamp: serverTimestamp(),
      });
      navigate("/");
    } catch (error) {
      console.error("Error add new user to Firebase Database", error);
    }
    setName("");
    setBdate("");
    setStatus("");
    setGender("");
    setEmail("");
    setPassword("");
    setPasswordAgain("");
  };

  return (
    <div className="lg:flex">
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
          <label className="tracking-wide font-medium mb-1 ml-5">Email</label>
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
      <div className="text-center mt-5">
        <div>Choose a role</div>
        <RoleRegister setStatus={setStatus} />
      </div>
    </div>
  );
}

export default FormRegister;
