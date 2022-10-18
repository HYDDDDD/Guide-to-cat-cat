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
import Food from "./component/Calculate/Food/Food";
import CatLitter from "./component/Calculate/CatLitter/CatLitter";
import Toy from "./component/Calculate/Toy/Toy";
import Vaccine from "./component/Calculate/Vaccine/Vaccine";
import Snack from "./component/Calculate/Snack/Snack";
import Other from "./component/Calculate/Other/Other";
import Cart from "./component/Calculate/Cart/Cart";
import PersonalInformation from "./component/Setting/PersonalInformation";
import Editname from "./component/Setting/Editname";
import Account from "./component/Setting/Account";
import PasswordSecurity from "./component/Setting/PasswordSecurity";
import Payment from "./component/Setting/Payment";
import Editpass from "./component/Setting/Editpass";
import Editinformation from "./component/Setting/Editinformation";
import Language from "./component/Setting/Language";
import Darkmodee from "./component/Setting/Darkmodee";
import Activitylog from "./component/Setting/Activitylog";
import Logout from "./component/Setting/Logout";

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
      <Route
        path="/calculate"
        element={<Calculate currentUser={currentUser} />}
      />
      <Route path="/setting" element={<Setting />} />
      <Route path="/account" element={<Account />} />
      <Route path="/personalInformation" element={<PersonalInformation currentUser={currentUser}/>} />
      <Route path="/editname" element={<Editname />} />
      <Route path="/editinformation" element={<Editinformation />} />
      <Route path="/passwordSecurity" element={<PasswordSecurity />} />
      <Route path="/editpass" element={<Editpass />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/language" element={<Language />} />
      <Route path="/darkmodee" element={<Darkmodee />} />
      <Route path="/activitylog" element={<Activitylog />} />
      <Route path="/logout" element={<Logout />} />
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
