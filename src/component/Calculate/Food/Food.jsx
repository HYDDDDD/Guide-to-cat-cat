import React, { useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import btnNext from "../../Picture/next.png";
import Kitten from "./Kitten";
import Cat from "./Cat";
import OldCat from "./OldCat";
import MotherCat from "./MotherCat";

function Food(props) {
  const [statusFood, setStatusFood] = useState("food");

  return (
    <>
      {statusFood === "food" ? (
        <>
          <div className="flex justify-center lg:mt-10">
            <div className="lg:w-4/6 w-full space-y-10 sm:space-y-5 p-4 sm:p-7 lg:border-12 lg:rounded-3xl lg:border-4-blue">
              <div className="flex space-x-5">
                <div>
                  <button
                    type="button"
                    onClick={() => props.setStatusNavigate("selectItem")}
                  >
                    <img src={btnBack} alt="" />
                  </button>
                </div>
                <div className="font-bold text-xl">อาหาร</div>
              </div>
              <div className="space-y-3">
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusFood("kitten")}
                >
                  <div className="font-bold text-justify">
                    อาหารสำหรับแมวเด็ก
                  </div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusFood("cat")}
                >
                  <div className="font-bold text-justify">
                    อาหารสำหรับแมวโตเต็มวัย
                  </div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusFood("oldCat")}
                >
                  <div className="font-bold text-justify">
                    อาหารสำหรับแมวที่มีอายุ 7 ปีขึ้นไป
                  </div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusFood("motherCat")}
                >
                  <div className="font-bold text-justify">
                    อาหารสำหรับแมวท้อง
                  </div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
              </div>
              <div>
                <div className="flex justify-end mt-10">
                  <button
                    type="button"
                    onClick={() => props.setStatusNavigate("cart")}
                  >
                    <img className="sm:w-28 w-20" src={iconCart} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {statusFood === "kitten" ? (
            <>
              <Kitten
                // setStatusNavigate={props.setStatusNavigate}
                setProduct={props}
                setStatusFood={setStatusFood}
              />
            </>
          ) : (
            <>
              {statusFood === "cat" ? (
                <>
                  <Cat
                    setStatusNavigate={props.setStatusNavigate}
                    setStatusFood={setStatusFood}
                  />
                </>
              ) : (
                <>
                  {statusFood === "oldCat" ? (
                    <>
                      <OldCat
                        setStatusNavigate={props.setStatusNavigate}
                        setStatusFood={setStatusFood}
                      />
                    </>
                  ) : (
                    <>
                      {statusFood === "motherCat" ? (
                        <>
                          <MotherCat
                            setStatusNavigate={props.setStatusNavigate}
                            setStatusFood={setStatusFood}
                          />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default Food;
