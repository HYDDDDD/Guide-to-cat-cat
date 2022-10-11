import React, { useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import btnNext from "../../Picture/next.png";
import Clumping from "./Clumping";
import NonClumping from "./NonClumping";
import Crystal from "./Crystal";
import Biodegradable from "./Biodegradable";

function CatLitter({ setStatusNavigate }) {
  const [statusCatLitter, setStatusCatLitter] = useState("catLitter");

  return (
    <>
      {statusCatLitter === "catLitter" ? (
        <>
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
                <div className="font-bold text-xl">ทรายแมว</div>
              </div>
              <div className="space-y-3">
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusCatLitter("clumping")}
                >
                  <div className="font-bold text-justify">
                    ทรายแมวชนิด Clumping Litter : ทรายสำหรับแมวจับตัวเป็นก้อน
                  </div>
                  <div className="mt-auto mb-auto px-3">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusCatLitter("nonClumping")}
                >
                  <div className="font-bold text-justify break-all">
                    ทรายแมวชนิด Non-clumping conventional litter :
                    ทรายสำหรับแมวไม่จับตัวเป็นก้อน
                  </div>
                  <div className="mt-auto mb-auto px-3">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusCatLitter("crystal")}
                >
                  <div className="font-bold text-justify">
                    ทรายสำหรับแมวชนิด crystal litter หรือ Siliga gel litter :
                    ทรายแมวคริสตัล หรือมีอีกชื่อว่า ทรายแมวซิลิก้าเจล
                  </div>
                  <div className="mt-auto mb-auto px-3">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusCatLitter("biodegradable")}
                >
                  <div className="font-bold text-justify">
                    ทรายสำหรับแมวชนิด Biodegradable litter : ทรายของแมวชนิด
                    วัสดุธรรมชาติสามารถย่อยสลายเองได้
                  </div>
                  <div className="mt-auto mb-auto px-3">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
              </div>
              <div>
                <div className="flex justify-end mt-10">
                  <button
                    type="button"
                    onClick={() => setStatusNavigate("cart")}
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
          {statusCatLitter === "clumping" ? (
            <>
              <Clumping
                setStatusNavigate={setStatusNavigate}
                setStatusCatLitter={setStatusCatLitter}
              />
            </>
          ) : (
            <>
              {statusCatLitter === "nonClumping" ? (
                <>
                  <NonClumping
                    setStatusNavigate={setStatusNavigate}
                    setStatusCatLitter={setStatusCatLitter}
                  />
                </>
              ) : (
                <>
                  {statusCatLitter === "crystal" ? (
                    <>
                      <Crystal
                        setStatusNavigate={setStatusNavigate}
                        setStatusCatLitter={setStatusCatLitter}
                      />
                    </>
                  ) : (
                    <>
                      {statusCatLitter === "biodegradable" ? (
                        <>
                          <Biodegradable
                            setStatusNavigate={setStatusNavigate}
                            setStatusCatLitter={setStatusCatLitter}
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

export default CatLitter;
