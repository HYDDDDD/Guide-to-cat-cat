import React from "react";
import btnTable from "../Picture/btnTable.png";

function TreasuryLikes() {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="border border-gray-300 w-full lg:w-9/12 relative">
          <div className="border border-black ml-6 lg:ml-56 w-8 lg:w-8 absolute"></div>
        </div>
      </div>
      <div className="flex ml-5 lg:ml-96 space-x-2">
        <div className="mt-auto mb-auto">
          <img src={btnTable} alt="" />
        </div>
        <div className="text-xl font-bold mt-2">Treasury Likes</div>
      </div>
      <div></div>
    </div>
  );
}

export default TreasuryLikes;
