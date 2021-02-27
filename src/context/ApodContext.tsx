import React, { createContext, useState, useContext } from "react";
import api from "../services/api";

export const userPage = createContext({});

interface apiStructure {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  title: string;
  url: string;
}

export default function ApodProvider({ children }: any) {
  const [activePage, setActivePage] = useState({ page: "FirstPage" });
  const [dataGetInformation, setDataGetInformation] = useState<
    apiStructure[]
  >();
  interface Props {
    date?: string;
    start_date?: string;
    end_date?: string;
    count?: string;
    api_key?: string;
  }

  const GetInformation = (data: Props) => {
    const info = Promise.all([
      api.get(
        `/planetary/apod?${data.date ? "&date=" + data.date : ""}${
          data.start_date
            ? "&start_date=" + data.start_date + "&end_date=" + data.end_date
            : ""
        }${data.count ? "&count=" + data.count : ""}&api_key=${data.api_key}`,
        {
          validateStatus: function (status) {
            return status < 501; // Resolve only if the status code is less than 500
          },
        }
      ),
    ]).then(async (responses) => {
      const [PushUserInformation] = responses;
      const results = await PushUserInformation.data;
      setDataGetInformation(results);
      return results;
    });
    return info;
  };

  return (
    <userPage.Provider
      value={
        { activePage, setActivePage, GetInformation, dataGetInformation } as any
      }
    >
      {children}
    </userPage.Provider>
  );
}

export function useApodContex() {
  const context = useContext(userPage);
  const {
    activePage,
    setActivePage,
    GetInformation,
    dataGetInformation,
  }: any = context;
  return { activePage, setActivePage, GetInformation, dataGetInformation };
}
