import React, { useState } from "react";
import iconCart from "../../Picture/iconCart.png";
import btnBack from "../../Picture/back.png";
import btnNext from "../../Picture/next.png";
import Condo from "./Condo";
import CatFall from "./CatFall";
import CatTunnel from "./CatTunnel";
import Laser from "./Laser";
import BallRail from "./BallRail";

function Toy({ setStatusNavigate }) {
  const [statusToy, setStatusToy] = useState("toy");

  return (
    <>
      {statusToy === "toy" ? (
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
                <div className="font-bold text-xl">ของเล่น</div>
              </div>
              <div className="space-y-3">
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusToy("condo")}
                >
                  <div className="font-bold text-justify">คอนโดแมว</div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusToy("catFall")}
                >
                  <div className="font-bold text-justify">ไม้ตกแมว</div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusToy("catTunnel")}
                >
                  <div className="font-bold text-justify">อุโมงค์แมว</div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusToy("laser")}
                >
                  <div className="font-bold text-justify">เลเซอร์</div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button
                  className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border"
                  type="button"
                  onClick={() => setStatusToy("ballRail")}
                >
                  <div className="font-bold text-justify">รางลูกบอล</div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
                <button className="bg-G1-blue sm:ml-12 sm:w-5/6 w-full flex justify-between rounded-md p-5 shadow-lg border">
                  <div className="font-bold text-justify">กล่องแมวตบปริศนา</div>
                  <div className="mt-auto mb-auto">
                    <img className="w-4" src={btnNext} alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {statusToy === "condo" ? (
            <>
              <Condo
                setStatusNavigate={setStatusNavigate}
                setStatusToy={setStatusToy}
              />
            </>
          ) : (
            <>
              {statusToy === "catFall" ? (
                <>
                  <CatFall
                    setStatusNavigate={setStatusNavigate}
                    setStatusToy={setStatusToy}
                  />
                </>
              ) : (
                <>
                  {statusToy === "catTunnel" ? (
                    <>
                      <CatTunnel
                        setStatusNavigate={setStatusNavigate}
                        setStatusToy={setStatusToy}
                      />
                    </>
                  ) : (
                    <>
                      {statusToy === "laser" ? (
                        <>
                          <Laser
                            setStatusNavigate={setStatusNavigate}
                            setStatusToy={setStatusToy}
                          />
                        </>
                      ) : (
                        <>
                          {statusToy === "ballRail" ? (
                            <>
                              <BallRail
                                setStatusNavigate={setStatusNavigate}
                                setStatusToy={setStatusToy}
                              />
                            </>
                          ) : (
                            (<></>)()
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
      )}
    </>
  );
}

export default Toy;
