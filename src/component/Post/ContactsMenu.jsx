import React from "react";
import sug1 from "../Picture/sug1.png";
import btnMore from "../Picture/btnMore.png";
import ProfileEric from "../Picture/profilePic-Eric.png";
import ProfileCynthia from "../Picture/profilePic-Cynthia.png";
import ProfileDennis from "../Picture/profilePic-Dennis.png";
import ProfilePop from "../Picture/profilePic-pop.png";
import ProfileFern from "../Picture/ProfilePic-Fern.png";

function ContactsMenu() {
  return (
    <div className="fixed px-5 shadow-xl">
      <div className="font-bold text-xl mt-5">Suggested</div>
      <div>
        <img src={sug1} alt="" />
      </div>
      <div className="flex justify-between mt-10">
        <div className="font-bold text-xl">Contacts</div>
        <div>
          <img src={btnMore} alt="" />
        </div>
      </div>
      {/* persons */}
      <div>
        <div className="flex space-x-5 m-5">
          <div>
            <img src={ProfileEric} alt="" />
          </div>
          <div className="mt-auto mb-auto">Eric Jonse</div>
        </div>
      </div>
      <div>
        <div className="flex space-x-5 m-5">
          <div>
            <img src={ProfileCynthia} alt="" />
          </div>
          <div className="mt-auto mb-auto">Cynthia lopez</div>
        </div>
      </div>
      <div>
        <div className="flex space-x-5 m-5">
          <div>
            <img className="w-16" src={ProfileDennis} alt="" />
          </div>
          <div className="mt-auto mb-auto">Dennis Han</div>
        </div>
      </div>
      <div>
        <div className="flex space-x-5 m-5">
          <div>
            <img src={ProfilePop} alt="" />
          </div>
          <div className="mt-auto mb-auto">Pop na</div>
        </div>
      </div>
      <div>
        <div className="flex space-x-5 m-5">
          <div>
            <img className="w-16" src={ProfileFern} alt="" />
          </div>
          <div className="mt-auto mb-auto">Fern</div>
        </div>
      </div>
    </div>
  );
}

export default ContactsMenu;
