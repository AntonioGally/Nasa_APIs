import React, { createContext, useState, useContext } from "react";

export const userPage = createContext({});

export default function NeowsProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage");
  return (
    <userPage.Provider
      value={
        {
          activePage,
          setActivePage,
        } as any
      }
    >
      {children}
    </userPage.Provider>
  );
}
export function useNeowsContext() {
  const context = useContext(userPage);
  const { activePage, setActivePage }: any = context;
  return { activePage, setActivePage };
}
