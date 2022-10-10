import React from "react";
import iconFood from "../Picture/iconFood.png";
import iconCatLitter from "../Picture/iconCatLitter.png";
import iconToy from "../Picture/iconToy.png";
import iconVaccine from "../Picture/iconVaccine.png";
import iconSnack from "../Picture/iconSnack.png";
import iconOther from "../Picture/iconOther.png";
import iconCart from "../Picture/iconCart.png";

function SelectItem({ setStatusNavigate }) {
  return (
    <div className="flex justify-center mt-10">
      <div className="sm:w-4/6 space-y-10 sm:space-y-16 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
        <div className="flex justify-between space-x-10">
          <button type="button" onClick={() => setStatusNavigate("food")}>
            <div>
              <img src={iconFood} alt="" />
            </div>
            <div className="text-center">อาหาร</div>
          </button>
          <button type="button" onClick={() => setStatusNavigate("catLitter")}>
            <div>
              <img src={iconCatLitter} alt="" />
            </div>
            <div className="text-center">ทรายแมว</div>
          </button>
          <button type="button" onClick={() => setStatusNavigate("toy")}>
            <div>
              <img src={iconToy} alt="" />
            </div>
            <div className="text-center">ของเล่น</div>
          </button>
        </div>
        <div className="flex justify-between space-x-10">
          <button type="button" onClick={() => setStatusNavigate("vaccine")}>
            <div>
              <img src={iconVaccine} alt="" />
            </div>
            <div className="text-center">วัคซีน</div>
          </button>
          <button type="button" onClick={() => setStatusNavigate("snack")}>
            <div>
              <img src={iconSnack} alt="" />
            </div>
            <div className="text-center">ขนม</div>
          </button>
          <button type="button" onClick={() => setStatusNavigate("other")}>
            <div>
              <img src={iconOther} alt="" />
            </div>
            <div className="text-center">อื่นๆ</div>
          </button>
        </div>
        <div>
          <div className="flex justify-end">
            <button type="button" onClick={() => setStatusNavigate("cart")}>
              <img className="sm:w-28 w-20" src={iconCart} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectItem;
