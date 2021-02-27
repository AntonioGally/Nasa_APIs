import React, { createContext, useState, useContext } from "react";

const userPage = createContext({});

export default function ApodProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage");

  return (
    <userPage.Provider value={{ activePage, setActivePage } as any}>
      {children}
    </userPage.Provider>
  );
}

export function useApodContex() {
  const context = useContext(userPage);
  const { activePage, setActivePage }: any = context;
  return { activePage, setActivePage };
}
