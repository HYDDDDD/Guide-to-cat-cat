import React from "react";
import iconCart from "../Picture/iconCart.png";
import btnBack from "../Picture/back.png";

function Vaccine({ setStatusNavigate }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="sm:w-4/6 space-y-10 sm:space-y-16 p-4 sm:p-7 border-12 rounded-3xl border-4-blue">
        <div className="flex justify-between space-x-10">
          <button type="button" onClick={() => setStatusNavigate("selectItem")}>
            <img src={btnBack} alt="" />
          </button>
          Vaccine
        </div>
        <div className="flex justify-between space-x-10">{/*  */}</div>
        <div>
          <div className="flex justify-end">
            <button type="button" onClick={() => setStatusNavigate("cart")}>
              <img className="sm:w-full w-20" src={iconCart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vaccine;
