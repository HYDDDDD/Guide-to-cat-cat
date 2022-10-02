import { Routes, Route } from "react-router-dom";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import Profile from "./component/Profile/Profile";
import Chat from "./component/Chat/Chat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
