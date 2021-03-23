import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Spinner } from "react-bootstrap";
import MyKey from "../../../../../MyKey";
import { notificationStructure } from "../../../../../@types/donki";
import { Container, Title, ChartContent } from "./FirstTabStyle";
import { useDonkiContext } from "../../../../../context/DonkiContext";

const FirstPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [FLR, setFLR] = useState<notificationStructure[]>([]);
  const [SEP, setSEP] = useState<notificationStructure[]>([]);
  const [CME, setCME] = useState<notificationStructure[]>([]);
  const [IPS, setIPS] = useState<notificationStructure[]>([]);
  const [MPC, setMPC] = useState<notificationStructure[]>([]);
  const [GST, setGST] = useState<notificationStructure[]>([]);
  const [RBE, setRBE] = useState<notificationStructure[]>([]);

  const [Report, setReport] = useState<notificationStructure[]>([]);

  const {
    allRelatory,
    setAllRelatory,
    getAllRelatory,
    auxFilter,
    setAuxFilter,
  } = useDonkiContext();
  useEffect(() => {
    setLoading(true);
    const request = async () => {
      const result = await getAllRelatory(MyKey());
      setAllRelatory(result);
    };
    if (!allRelatory) {
      request();
    } else {
      setLoading(false);
      //!Filtro de todos os tipos de relatório, cada tipo tem um state
      allRelatory.map((i: any, index: number) => {
        if (i.messageType === "FLR") {
          FLR?.push(allRelatory[index]);
          return setFLR(FLR);
        } else if (i.messageType === "SEP") {
          SEP?.push(allRelatory[index]);
          return setSEP(SEP);
        } else if (i.messageType === "CME") {
          CME?.push(allRelatory[index]);
          return setCME(CME);
        } else if (i.messageType === "IPS") {
          IPS?.push(allRelatory[index]);
          return setIPS(IPS);
        } else if (i.messageType === "MPC") {
          MPC?.push(allRelatory[index]);
          return setMPC(MPC);
        } else if (i.messageType === "RBE") {
          RBE?.push(allRelatory[index]);
          return setRBE(RBE);
        } else if (i.messageType === "Report") {
          Report?.push(allRelatory[index]);
          return setReport(Report);
        } else if (i.messageType === "GST") {
          GST.push(allRelatory[index]);
          return setGST(GST);
        } else return "";
      });
      var obj = {
        FLR: FLR,
        SEP: SEP,
        CME: CME,
        IPS: IPS,
        MPC: MPC,
        RBE: RBE,
        GST: GST,
        Report: Report,
      };
      setAuxFilter(obj);
    }

    // eslint-disable-next-line
  }, [allRelatory]);
  return (
    <Container>
      <Title>Todos os relatórios</Title>
      {loading ? (
        <div
          style={{
            width: "calc(100% - 300px)",
            marginLeft: "auto",
            marginTop: "10%",
            textAlign: "center",
          }}
        >
          <Spinner
            animation="border"
            role="status"
            variant="light"
            style={{ width: 100, height: 100 }}
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ChartContent>
          <Bar
            data={{
              labels: [
                "SEP",
                "CME",
                "IPS",
                "MPC",
                "RBE",
                "GST",
                "FLR",
                "Report",
              ],
              datasets: [
                {
                  // Legenda geral
                  label: "Relatórios",
                  // Dados a serem inseridos nas barras
                  data: [
                    auxFilter.SEP?.length,
                    auxFilter.CME?.length,
                    auxFilter.IPS?.length,
                    auxFilter.MPC?.length,
                    auxFilter.RBE?.length,
                    auxFilter.GST?.length,
                    auxFilter.FLR?.length,
                    auxFilter.Report?.length,
                  ],
                  // Define as cores de preenchimento das barras
                  // de acordo com sua posição no vetor
                  backgroundColor: [
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                  ],
                  // Define as cores de preenchimento das bordas das barras
                  // de acordo com sua posição no vetor
                  borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                  ],
                  // Define a espessura da borda dos retângulos
                  borderWidth: 1,
                },
              ],
            }}
          />
        </ChartContent>
      )}
    </Container>
  );
};

export default FirstPage;
