import React, { createContext, useState, useContext } from "react";
import api from "../services/api";
export const NeowsContext = createContext({});

export default function NeowsProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage");

  const FeedInformation = (date: string, api_key: string) => {
    const info = Promise.all([
      api.get(
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${api_key}`, //vai começar e terminar no mesmo dia pra n da overLoad na requisição
        {
          validateStatus: function (status) {
            return status < 501; // Resolve only if the status code is less than 500
          },
        }
      ),
    ]).then(async (responses) => {
      const [PushNotifications] = responses;
      const results = await PushNotifications.data;
      if (results) {
      }
      return results;
    });
    return info;
  };
  return (
    <NeowsContext.Provider
      value={
        {
          activePage,
          setActivePage,
          FeedInformation,
        } as any
      }
    >
      {children}
    </NeowsContext.Provider>
  );
}
export function useNeowsContext() {
  const context = useContext(NeowsContext);
  const { activePage, setActivePage, FeedInformation }: any = context;
  return { activePage, setActivePage, FeedInformation };
}
