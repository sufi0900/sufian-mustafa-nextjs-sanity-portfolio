"use client";
import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [showComponent, setShowComponent] = useState(false);

  const toggleShowComponent = () => {
    setShowComponent((prev) => !prev);
  };

  const stateValue = {
    showComponent,
    toggleShowComponent,
  };

  return (
    <StateContext.Provider value={stateValue}>{children}</StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
