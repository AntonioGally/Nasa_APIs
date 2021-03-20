import React, { useState, createContext, useContext } from "react";

const DonkiContext = createContext({});

export default function DonkiProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage");
  return (
    <DonkiContext.Provider value={{ activePage, setActivePage }}>
      {children};
    </DonkiContext.Provider>
  );
}

export function useDonkiContext() {
  const context = useContext(DonkiContext);
  const { activePage, setActivePage }: any = context;
  return { activePage, setActivePage };
}
