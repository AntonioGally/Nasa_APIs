import React, { createContext, useState, useContext } from "react";
import { apiStructure } from "../@types/neows";
import api from "../services/api";
export const NeowsContext = createContext({});

export default function NeowsProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage");
  const [dataInformationHadardous, setDataInformationHazardous] = useState<
    apiStructure[]
  >();
  const [dataInformation, setDataInformation] = useState<apiStructure[]>();
  const [additionalInfo, setAdditionalInfo] = useState({
    Objects: Number,
    Date: String,
  });

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
          dataInformationHadardous,
          setDataInformationHazardous,
          dataInformation,
          setDataInformation,
          additionalInfo,
          setAdditionalInfo,
        } as any
      }
    >
      {children}
    </NeowsContext.Provider>
  );
}
export function useNeowsContext() {
  const context = useContext(NeowsContext);
  const {
    activePage,
    setActivePage,
    FeedInformation,
    dataInformationHadardous,
    setDataInformationHazardous,
    dataInformation,
    setDataInformation,
    additionalInfo,
    setAdditionalInfo,
  }: any = context;
  return {
    activePage,
    setActivePage,
    FeedInformation,
    dataInformationHadardous,
    setDataInformationHazardous,
    dataInformation,
    setDataInformation,
    additionalInfo,
    setAdditionalInfo,
  };
}
