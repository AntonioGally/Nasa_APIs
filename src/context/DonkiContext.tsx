import React, { useState, createContext, useContext } from "react";
import { notificationStructure } from "../@types/donki";
import api from "../services/api";
const DonkiContext = createContext({});

export default function DonkiProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage"); //Me auxilia na hora de renderizar um componente por meio da SideBar (É utilizado no App.tsx)
  const [allRelatory, setAllRelatory] = useState<notificationStructure[]>(); //dados da requisição
  const [auxFilter, setAuxFilter] = useState({}); // Serve para Guardar o filtro aqui no contex
  const [allRelatorySDate, setAllRelatorySDate] = useState<
    notificationStructure[]
  >(); // Dados da Segunda Tab da primeira página
  const [auxFilterSDate, setAuxFilterSDate] = useState({}); //Filtro da segunda tab da primeira página
  const [
    auxRelatoryView,
    setAuxRelatoryView,
  ] = useState<notificationStructure>(); // Aqui eu guardo a informação do relatório que está sendo visto na terceira página
  const [dataSpecificType, setDataSpecificType] = useState<
    notificationStructure[]
  >();
  //Função da primeira tab da página "Análise Geral"
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
  //Função da segunda tab da página "Análise Geral"
  const getSpecificDateRelatory = (
    api_key: string,
    start_date: string,
    end_date: string
  ) => {
    const info = Promise.all([
      api.get(
        `https://api.nasa.gov/DONKI/notifications?startDate=${start_date}&endDate=${end_date}&type=all&api_key=${api_key}`,
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

  const getTypeRelatory = (api_key: string, type: string) => {
    const info = Promise.all([
      api.get(
        `https://api.nasa.gov/DONKI/notifications?type=${type}&api_key=${api_key}`,
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
        getSpecificDateRelatory,
        allRelatorySDate,
        setAllRelatorySDate,
        auxFilterSDate,
        setAuxFilterSDate,
        auxRelatoryView,
        setAuxRelatoryView,
        getTypeRelatory,
        dataSpecificType,
        setDataSpecificType,
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
    getSpecificDateRelatory,
    allRelatorySDate,
    setAllRelatorySDate,
    auxFilterSDate,
    setAuxFilterSDate,
    auxRelatoryView,
    setAuxRelatoryView,
    getTypeRelatory,
    dataSpecificType,
    setDataSpecificType,
  }: any = context;
  return {
    activePage,
    setActivePage,
    allRelatory,
    setAllRelatory,
    getAllRelatory,
    auxFilter,
    setAuxFilter,
    getSpecificDateRelatory,
    allRelatorySDate,
    setAllRelatorySDate,
    auxFilterSDate,
    setAuxFilterSDate,
    auxRelatoryView,
    setAuxRelatoryView,
    getTypeRelatory,
    dataSpecificType,
    setDataSpecificType,
  };
}
