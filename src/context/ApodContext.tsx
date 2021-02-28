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
  const [dataStartEndDate, setDataStartEndDate] = useState<apiStructure[]>();
  const [dataOneDate, setDataOneDate] = useState<apiStructure[]>();
  const [dataAleatoryDate, setDataAleatoryDate] = useState<apiStructure[]>();
  const [formattedDate, setFormattedDate] = useState("");
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
      var arr = [...results.date];
      var year = arr[0] + arr[1] + arr[2] + arr[3];
      var month = arr[5] + arr[6];
      var day = arr[8] + arr[9];
      setFormattedDate(`${day}/${month}/${year}`);
      return results;
    });
    return info;
  };

  const startEndDate = (data: Props) => {
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
      setDataStartEndDate(results);
      return results;
    });
    return info;
  };

  const OneDate = (data: Props) => {
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
      setDataOneDate(results);
      return results;
    });
    return info;
  };

  const AleatoryDate = (data: Props) => {
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
      setDataAleatoryDate(results);
      return results;
    });
    return info;
  };

  return (
    <userPage.Provider
      value={
        {
          activePage,
          setActivePage,
          GetInformation,
          dataGetInformation,
          formattedDate,
          startEndDate,
          dataStartEndDate,
          OneDate,
          dataOneDate,
          AleatoryDate,
          dataAleatoryDate,
        } as any
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
    formattedDate,
    startEndDate,
    dataStartEndDate,
    OneDate,
    dataOneDate,
    AleatoryDate,
    dataAleatoryDate,
  }: any = context;
  return {
    activePage,
    setActivePage,
    GetInformation,
    dataGetInformation,
    formattedDate,
    startEndDate,
    dataStartEndDate,
    OneDate,
    dataOneDate,
    AleatoryDate,
    dataAleatoryDate,
  };
}
