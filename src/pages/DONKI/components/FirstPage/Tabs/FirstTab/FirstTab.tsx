import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Spinner } from "react-bootstrap";
import { Table } from "react-bootstrap";
import MyKey from "../../../../../../MyKey";
import { notificationStructure } from "../../../../../../@types/donki";
import { Container, ExplainText, ChartContent } from "./FirstTabStyle";
import { useDonkiContext } from "../../../../../../context/DonkiContext";
import { FormateDateDonki } from "../../../../../../services/dateFormater";

import Modal from "../Modal";

const FirstPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [auxWindowWidth, setAuxWindowWidth] = useState(0);
  const [auxIndexSelected, setAuxIndexSelected] = useState("");
  const [openModal, setOpenModal] = useState(false);
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
    setActivePage,
    setAuxRelatoryView,
  } = useDonkiContext();
  useEffect(() => {
    setAuxWindowWidth(window.innerWidth);
    console.log(auxWindowWidth);
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
      <ExplainText>
        <ul>
          <li>
            <span>FLR: </span>Explosão solar (Solar Flare)
          </li>
          <li>
            <span>SEP: </span> Partícula Energética Solar (Solar Energetic
            Particle)
          </li>
          <li>
            <span>CME: </span> Ejeção de massa coronal (Coronal Mass Ejection)
          </li>
          <li>
            <span>IPS:</span> Choque Interplanetário (Interplanetary Shock)
          </li>
          <li>
            <span>MPC:</span> Cruzamento de magnetopausa (Magnetopause Crossing)
          </li>
          <li>
            <span>RBE:</span> Aumento da correia de radiação (Radiation Belt
            Enhancement)
          </li>
          <li>
            <span>GST:</span> Tempestade Geomagnética (Geomagnetic Storm)
          </li>
        </ul>
      </ExplainText>
      {loading ? (
        <div
          style={{
            width: "calc(100% - 300px)",
            margin: "10% auto 0",
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
      ) : auxWindowWidth > 768 ? (
        <ChartContent>
          <Bar
            data={{
              labels: [
                "FLR",
                "SEP",
                "CME",
                "IPS",
                "MPC",
                "GST",
                "RBE",
                "Report",
              ],
              datasets: [
                {
                  // Legenda geral
                  label: "Relatórios",
                  // Dados a serem inseridos nas barras
                  data: [
                    auxFilter.FLR?.length,
                    auxFilter.SEP?.length,
                    auxFilter.CME?.length,
                    auxFilter.IPS?.length,
                    auxFilter.MPC?.length,
                    auxFilter.GST?.length,
                    auxFilter.RBE?.length,
                    auxFilter.Report?.length,
                  ],
                  // Define as cores de preenchimento das barras
                  // de acordo com sua posição no vetor
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
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
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                  ],
                  // Define a espessura da borda dos retângulos
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              onClick: function (e: any) {
                var element = this.getElementAtEvent(e);

                // If you click on at least 1 element ...
                if (element.length > 0) {
                  // Logs it
                  if (element[0]._datasetIndex === 0) {
                    //Primeiro Dataset
                    let auxList = [
                      "FLR",
                      "SEP",
                      "CME",
                      "IPS",
                      "MPC",
                      "GST",
                      "RBE",
                      "Report",
                    ];
                    // console.log(auxList[element[0]._index]);
                    setAuxIndexSelected(auxList[element[0]._index]);
                    setOpenModal(true);
                    //Aqui eu pego o index da barrinha seguindo a ordem das informações (0 : FLR, 1: SEP, 2: CME...)
                    // console.log(auxFilter);
                  }
                }
              },
              legend: {
                display: true,
                labels: {
                  fontColor: "rgb(255, 255, 255)",
                  fontSize: 16,
                },
              },
              tooltips: {
                callbacks: {
                  label: function (tooltipItem: any) {
                    var label = "";
                    label += Math.round(tooltipItem.yLabel * 100) / 100;
                    return label + " Relatórios";
                  },
                },
              },
              title: {
                display: true,
                position: "top",
                fontSize: 20,
                fontColor: "rgb(255, 255, 255)",
                text: "Todos os Relatórios",
              },
              scales: {
                yAxes: [
                  {
                    scaleLabel: {
                      display: true,
                      labelString: "Quantidade",
                      fontColor: "#fff",
                      lineHeight: 2.0,
                      fontSize: 20,
                      fontFamily: "Poppins",
                    },
                    gridLines: {
                      color: "rgba(255,255,255,0.1)",
                    },
                    ticks: {
                      fontColor: "#fff",
                      fontFamily: "Poppins",
                      fontSize: "16",
                    },
                  },
                ],
                xAxes: [
                  {
                    ticks: {
                      display: true,
                      fontColor: "#fff",
                      fontFamily: "Poppins",
                      fontSize: "16",
                    },
                    scaleLabel: {
                      display: true,
                      labelString: "Tipos",
                      fontColor: "#fff",
                      lineHeight: 2.0,
                      fontSize: 20,
                      fontFamily: "Poppins",
                    },
                  },
                ],
              },
            }}
          />
        </ChartContent>
      ) : (
        <Table striped bordered hover variant="dark" responsive="md">
          <thead>
            <tr>
              <th onClick={() => console.log(allRelatory)}>Tipo de Mensagem</th>
              <th>Data</th>
              <th>Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {allRelatory?.map((information: any, indexMap: number) => (
              <tr
                key={indexMap}
                onClick={() => {
                  setActivePage("ThirdPage");
                  setAuxRelatoryView(information);
                }}
                style={{ cursor: "pointer" }}
              >
                <td>{information.messageType}</td>
                <td>{FormateDateDonki(information.messageIssueTime)}</td>
                <td className="limitTdTable">
                  {information.messageBody.slice(152, 6000)}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {openModal && (
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          index={auxIndexSelected}
        />
      )}
    </Container>
  );
};

export default FirstPage;
