import React, { useState, createContext, useContext } from "react";
import { notificationStructure } from "../@types/donki";
import api from "../services/api";
const DonkiContext = createContext({});

export default function DonkiProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage"); //Me auxilia na hora de renderizar um componente por meio da SideBar (É utilizado no App.tsx)
  const [allRelatory, setAllRelatory] = useState<notificationStructure[]>(); //dados da requisição
  const [auxFilter, setAuxFilter] = useState({}); // Serve para Guardar o filtro aqui no contex

  const getAllRelatory = (api_key: string) => {
    const info = Promise.all([
      api.get(
        `https://api.nasa.gov/DONKI/notifications?type=all&api_key=${api_key}`,
        {
          validateStatus: function (status) {
            return status < 501; // Resolve only if the status code is less than 500
          },
        }
      ),
    ]).then(async (responses) => {
      const [PushNotifications] = responses;
      const results = await PushNotifications.data;
      return results;
    });
    return info;
  };
  return (
    <DonkiContext.Provider
      value={{
        activePage,
        setActivePage,
        allRelatory,
        setAllRelatory,
        getAllRelatory,
        auxFilter,
        setAuxFilter,
      }}
    >
      {children};
    </DonkiContext.Provider>
  );
}

export function useDonkiContext() {
  const context = useContext(DonkiContext);
  const {
    activePage,
    setActivePage,
    allRelatory,
    setAllRelatory,
    getAllRelatory,
    auxFilter,
    setAuxFilter,
  }: any = context;
  return {
    activePage,
    setActivePage,
    allRelatory,
    setAllRelatory,
    getAllRelatory,
    auxFilter,
    setAuxFilter,
  };
}
