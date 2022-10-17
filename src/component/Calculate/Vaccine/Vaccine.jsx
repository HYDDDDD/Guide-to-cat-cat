import React from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import btnNext from "../../Picture/next.png";

function Vaccine({ setStatusNavigate }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="sm:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex space-x-5">
          <div>
            <button
              type="button"
              onClick={() => setStatusNavigate("selectItem")}
            >
              <img src={btnBack} alt="" />
            </button>
          </div>
          <div className="font-bold text-xl">วัคซีน</div>
        </div>
        <div className="space-y-3">
          <button className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border">
            <div className="font-bold text-justify">วัคซีนรวมในแมว</div>
            <div className="mt-auto mb-auto">
              <img className="w-4" src={btnNext} alt="" />
            </div>
          </button>
          <button className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border">
            <div className="font-bold text-justify">
              วัคซีนป้องกันโรคพิษสุนัขบ้า
            </div>
            <div className="mt-auto mb-auto">
              <img className="w-4" src={btnNext} alt="" />
            </div>
          </button>
          <button className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border">
            <div className="font-bold text-justify">
              วัคซีนป้องกันโรคลิวคิเมียในแมว
            </div>
            <div className="mt-auto mb-auto">
              <img className="w-4" src={btnNext} alt="" />
            </div>
          </button>
          <button className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border">
            <div className="font-bold text-justify">
              วัคซีนป้องกันโรคเอดส์แมว
            </div>
            <div className="mt-auto mb-auto">
              <img className="w-4" src={btnNext} alt="" />
            </div>
          </button>
          <button className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border">
            <div className="font-bold text-justify">
              วัคซีนป้องกันโรคเยื่อบุช่องท้องอักเสบ
            </div>
            <div className="mt-auto mb-auto">
              <img className="w-4" src={btnNext} alt="" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Vaccine;
