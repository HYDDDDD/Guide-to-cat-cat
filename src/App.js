import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Profile from "./component/Profile/Profile";
import Chat from "./component/Chat/Chat";
import Post from "./component/Post/Post";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase/firebase-config";
import AddPost from "./component/Post/AddPost";
import Calculate from "./component/Calculate/Calculate";
import Setting from "./component/Setting/Setting";
import Food from "./component/Calculate/Food";
import CatLitter from "./component/Calculate/CatLitter";
import Toy from "./component/Calculate/Toy";
import Vaccine from "./component/Calculate/Vaccine";
import Snack from "./component/Calculate/Snack";
import Other from "./component/Calculate/Other";
import Cart from "./component/Calculate/Cart";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [statusSignIn, setStatusSignIn] = useState(false);

  //Status user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //user signIn succeed.
        setCurrentUser(user);
        setStatusSignIn(true);
      } else {
        //User is not sign-in
        //console.log("User is not sign-in");
        setStatusSignIn(false);
      }
    });
  });

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/register"
        element={<Register currentUser={currentUser} />}
      />
      <Route path="/profile" element={<Profile currentUser={currentUser} />} />
      <Route
        path="/chat"
        element={<Chat currentUser={currentUser} statusSignIn={statusSignIn} />}
      />
      <Route path="/post" element={<Post currentUser={currentUser} />} />
      <Route path="/addPost" element={<AddPost currentUser={currentUser} />} />
      <Route path="/calculate" element={<Calculate />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/food" element={<Food />} />
      <Route path="/catLitter" element={<CatLitter />} />
      <Route path="/toy" element={<Toy />} />
      <Route path="/vaccine" element={<Vaccine />} />
      <Route path="/snack" element={<Snack />} />
      <Route path="/other" element={<Other />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
