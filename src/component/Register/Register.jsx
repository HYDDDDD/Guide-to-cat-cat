import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import FormRegister from "./FormRegister";

function Register({ currentUser }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

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
              <FormRegister currentUser={currentUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
