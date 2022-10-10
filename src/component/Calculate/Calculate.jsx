import React, { useState } from "react";
import NavigationBar from "../Navigation_bar/NavigationBar";
import MenuBar from "../Menu/Menu";
import SelectItem from "./SelectItem";
import Food from "./Food";
import CatLitter from "./CatLitter";
import Toy from "./Toy";
import Vaccine from "./Vaccine";
import Snack from "./Snack";
import Other from "./Other";
import Cart from "./Cart";

function Calculate() {
  const [statusNavigate, setStatusNavigate] = useState("selectItem");

  return (
    <div>
      <NavigationBar />
      <div>
        <div className="flex">
          <MenuBar />
          <div className="w-screen mt-16 py-2 lg:ml-64">
            <div>
              {statusNavigate === "selectItem" ? (
                <>
                  <SelectItem setStatusNavigate={setStatusNavigate} />
                </>
              ) : (
                <>
                  {statusNavigate === "food" ? (
                    <>
                      <Food setStatusNavigate={setStatusNavigate} />
                    </>
                  ) : (
                    <>
                      {statusNavigate === "catLitter" ? (
                        <>
                          <CatLitter setStatusNavigate={setStatusNavigate} />
                        </>
                      ) : (
                        <>
                          {statusNavigate === "toy" ? (
                            <>
                              <Toy setStatusNavigate={setStatusNavigate} />
                            </>
                          ) : (
                            <>
                              {statusNavigate === "vaccine" ? (
                                <>
                                  <Vaccine
                                    setStatusNavigate={setStatusNavigate}
                                  />
                                </>
                              ) : (
                                <>
                                  {statusNavigate === "snack" ? (
                                    <>
                                      <Snack
                                        setStatusNavigate={setStatusNavigate}
                                      />
                                    </>
                                  ) : (
                                    <>
                                      {statusNavigate === "other" ? (
                                        <>
                                          <Other
                                            setStatusNavigate={
                                              setStatusNavigate
                                            }
                                          />
                                        </>
                                      ) : (
                                        <>
                                          {statusNavigate === "cart" ? (
                                            <>
                                              <Cart
                                                setStatusNavigate={
                                                  setStatusNavigate
                                                }
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
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculate;
