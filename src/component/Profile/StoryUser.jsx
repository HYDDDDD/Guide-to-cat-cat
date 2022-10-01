import React from "react";
import Hightlight from "../Picture/Hightlight-story.png";
import MyCat from "../Picture/MyCat-story.png";
import CatFood from "../Picture/CatFood-story.png";

function StoryUser() {
  return (
    <div className="flex md:ml-44 ml-5 lg:ml-96 mt-10 space-x-10">
      <div className="w-fit text-center">
        <div><img src={Hightlight} alt="story1"/></div>
        <div className="font-bold">Hightlight</div>
      </div>
      <div className="w-fit text-center">
        <div><img src={MyCat} alt="story1"/></div>
        <div className="font-bold">My Cat</div>
      </div>
      <div className="w-fit text-center">
        <div><img src={CatFood} alt="story1"/></div>
        <div className="font-bold">Cat Food</div>
      </div>
    </div>
  );
}

export default StoryUser;
