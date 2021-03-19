import React, { createContext, useState, useContext } from "react";
import { apiStructure, lookupStructure } from "../@types/neows";
import api from "../services/api";
export const NeowsContext = createContext({});

export default function NeowsProvider({ children }: any) {
  const [activePage, setActivePage] = useState("FirstPage"); //Padrão que eu to utilizando para o funcionamento da sidebar com as mudanças de página no clique dos botões
  //(O controle ta no app.tsx)
  const [dataInformationHadardous, setDataInformationHazardous] = useState<
    apiStructure[]
  >(); // Aqui são armazenados os asteróides perigosos (O filtro ta no código da FirstPage da NeoWs)
  const [dataInformation, setDataInformation] = useState<apiStructure[]>(); // Aqui são armazenados todos os asteróides inofensivos
  const [additionalInfo, setAdditionalInfo] = useState({
    Objects: Number,
    Date: String,
  }); // Esse serve só para guardar a quantidade de asteroids e a data que o usuário digitou. Guardo-os separadamente pra não precisar fazer um .map() dentro
  //do h1
  const [
    auxAsteroidInformation,
    setAuxAsteroidInformation,
  ] = useState<apiStructure>(); // esse serve pra quando o usuário clica em algum asteróide no gráfico, ai eu coloco as informações daquele asteróide aqui nesse state
  // e ja redireciono para a página de LookUp
  const [lookupData, setLookupData] = useState<lookupStructure>();
  const [auxListYear, setAuxListYear] = useState([{ value: 0, label: "" }]); //Lista dos anos que a api devolve
  const [value, setValue] = useState(0); //Valor do slider que eu to colocando aqui pra o usuário poder voltar pro gráfico sem perder a posição que tava no slider
  const [auxDate, setAuxDate] = useState({ min: 0, max: 0 }); // Mesma coisa ai de cima, pega a data maxima e minima

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
      return results;
    });
    return info;
  };
  const LookupInformation = (id: string, api_key: string) => {
    const info = Promise.all([
      api.get(
        `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${api_key}`, //vai começar e terminar no mesmo dia pra n da overLoad na requisição
        {
          validateStatus: function (status) {
            return status < 501; // Resolve only if the status code is less than 500
          },
        }
      ),
    ]).then(async (responses) => {
      const [PushNotifications] = responses;
      if (PushNotifications.status === 404) {
        return "Id Não encontrado";
      }
      const results = await PushNotifications.data;
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
          auxAsteroidInformation,
          setAuxAsteroidInformation,
          lookupData,
          setLookupData,
          LookupInformation,
          auxListYear,
          setAuxListYear,
          value,
          setValue,
          auxDate,
          setAuxDate,
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
    auxAsteroidInformation,
    setAuxAsteroidInformation,
    lookupData,
    setLookupData,
    LookupInformation,
    auxListYear,
    setAuxListYear,
    value,
    setValue,
    auxDate,
    setAuxDate,
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
    auxAsteroidInformation,
    setAuxAsteroidInformation,
    lookupData,
    setLookupData,
    LookupInformation,
    auxListYear,
    setAuxListYear,
    value,
    setValue,
    auxDate,
    setAuxDate,
  };
}
