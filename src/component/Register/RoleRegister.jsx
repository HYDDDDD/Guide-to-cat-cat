import React, { useState } from "react";
import picInformant from "../Picture/informant.png";
import picInformantBlue from "../Picture/informantBlue.png";
import picInformantSeeker from "../Picture/informantSeeker.png";
import picInformantSeekerBlue from "../Picture/informantSeekerBlue.png";

function RoleRegister({ setStatus }) {
  const [informant, setInformant] = useState(false);
  const [seeker, setSeeker] = useState(false);
  return (
    <div className="flex flex-col justify-center">
      {!informant ? (
        <>
          <img
            className="mr-auto ml-auto w-64"
            src={picInformant}
            alt=""
            onClick={() => {
              setInformant(true);
              setStatus("Informant");
            }}
          />
          <div className="inline-block">
            <div className="flex justify-center mr-auto ml-auto items-center w-72">
              <hr className="w-24 border border-white" />
              <div className="">Or continue</div>
              <hr className="w-24 border border-white" />
            </div>
          </div>
          <img
            className="mr-auto ml-auto w-52"
            src={picInformantSeekerBlue}
            alt=""
            onClick={() => {
              setSeeker(true);
            }}
          />
        </>
      ) : (
        <>
          <img
            className="mr-auto ml-auto w-64"
            src={picInformantBlue}
            alt=""
            onClick={() => {
              setInformant(false);
            }}
          />
          <div className="inline-block">
            <div className="flex items-center w-72">
              <hr className="w-24 border border-white" />
              <div className="">Or continue</div>
              <hr className="w-24 border border-white" />
            </div>
          </div>
          <img
            className="mr-auto ml-auto w-52"
            src={picInformantSeeker}
            alt=""
            onClick={() => {
              setInformant(false);
              setStatus("Seeker");
            }}
          />
        </>
      )}
    </div>
  );
}

export default RoleRegister;
