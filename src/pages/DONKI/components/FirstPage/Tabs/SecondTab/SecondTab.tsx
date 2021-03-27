import React, { useState, useEffect } from "react";
import { Spinner, Table } from "react-bootstrap";
import { useDonkiContext } from "../../../../../../context/DonkiContext";
import { notificationStructure } from "../../../../../../@types/donki";
import { FormateDateDonki } from "../../../../../../services/dateFormater";
import MyKey from "../../../../../../MyKey";
import { Bar } from "react-chartjs-2";
import Modal from "../Modal";
import {
  Container,
  ExplainText,
  FormContent,
  Title,
  MyInput,
  ArrowIcon,
  ChartContent,
} from "./styles";
import { useForm } from "react-hook-form";
import {
  MonthVerification,
  FormateDateInput,
} from "../../../../../../services/dateFormater";
type TextForm = {
  startDate: string;
  endDate: string;
};

const FirstPage: React.FC = () => {
  const [auxWindowWidth, setAuxWindowWidth] = useState(0);
  const { register, handleSubmit, errors } = useForm<TextForm>();
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState("");
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

  useEffect(() => {
    setAuxWindowWidth(window.innerWidth);
  }, []);

  const {
    getSpecificDateRelatory,
    allRelatorySDate,
    setAllRelatorySDate,
    auxFilterSDate,
    setAuxFilterSDate,
    setAuxRelatoryView,
    setActivePage,
  } = useDonkiContext();

  const CleanVariable = () => {
    FLR.splice(0, FLR.length);
    setFLR(FLR);
    SEP.splice(0, SEP.length);
    setSEP(SEP);
    CME.splice(0, CME.length);
    setCME(CME);
    IPS.splice(0, IPS.length);
    setIPS(IPS);
    MPC.splice(0, MPC.length);
    setMPC(MPC);
    GST.splice(0, GST.length);
    setGST(GST);
    RBE.splice(0, RBE.length);
    setRBE(RBE);
    Report.splice(0, Report.length);
    setReport(Report);
  };

  const SubmitForm = (data: TextForm) => {
    setLoading(true);
    var start_date = FormateDateInput(data.startDate);
    var end_date = FormateDateInput(data.endDate);

    if (
      start_date === "O ano mínimo é 1996" ||
      start_date === "Insira um ano válido"
    ) {
      setErros(start_date);
    } else if (
      end_date === "O ano mínimo é 1996" ||
      end_date === "Insira um ano válido"
    ) {
      setErros(end_date);
      //Passando pela verificação de ano válido ou inválido
    } else {
      var obj = {
        start_date: data.startDate,
        end_date: data.endDate,
      };
      if (MonthVerification(obj)) {
        //Válido
        setErros("");
        const request = async () => {
          CleanVariable();
          await getSpecificDateRelatory(MyKey(), start_date, end_date).then(
            (data: any) => {
              setLoading(false);
              setAllRelatorySDate(data);
              data.map((i: any, index: number) => {
                if (i.messageType === "FLR") {
                  FLR?.push(data[index]);
                  return setFLR(FLR);
                } else if (i.messageType === "SEP") {
                  SEP?.push(data[index]);
                  return setSEP(SEP);
                } else if (i.messageType === "CME") {
                  CME?.push(data[index]);
                  return setCME(CME);
                } else if (i.messageType === "IPS") {
                  IPS?.push(data[index]);
                  return setIPS(IPS);
                } else if (i.messageType === "MPC") {
                  MPC?.push(data[index]);
                  return setMPC(MPC);
                } else if (i.messageType === "RBE") {
                  RBE?.push(data[index]);
                  return setRBE(RBE);
                } else if (i.messageType === "Report") {
                  Report?.push(data[index]);
                  return setReport(Report);
                } else if (i.messageType === "GST") {
                  GST.push(data[index]);
                  return setGST(GST);
                } else return "";
              });
              var auxObj = {
                FLR: FLR,
                SEP: SEP,
                CME: CME,
                IPS: IPS,
                MPC: MPC,
                RBE: RBE,
                GST: GST,
                Report: Report,
              };
              setAuxFilterSDate(auxObj);
            }
          );
        };
        request();
      } else {
        setLoading(false);
        setErros("Insira um intervalo de no máximo 30 dias, a partir de 2010");
      }
    }
  };
  return (
    <>
      <Container>
        <FormContent onSubmit={handleSubmit(SubmitForm)}>
          <div>
            <Title>Data de início:</Title>
            <MyInput
              type="text"
              id="startDate"
              name="startDate"
              placeholder="Ex: 17/11/2002"
              ref={register({
                minLength: {
                  value: 10,
                  message: "Insira no mínimo 10 caractéres",
                },
                maxLength: {
                  value: 10,
                  message: "Insira no máximo 10 caractéres",
                },
                required: {
                  value: true,
                  message: "Insira uma data",
                },
              })}
            />

            {errors.startDate &&
              (errors.startDate as any).type === "minLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.startDate as any).message}
                </div>
              )}
            {errors.startDate &&
              (errors.startDate as any).type === "maxLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.startDate as any).message}
                </div>
              )}
            {errors.startDate && (errors.startDate as any).type === "required" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.startDate as any).message}
              </div>
            )}
          </div>
          <div>
            <Title>Data final:</Title>
            <div>
              <MyInput
                type="text"
                id="endDate"
                name="endDate"
                placeholder="Ex: 20/11/2002"
                ref={register({
                  minLength: {
                    value: 10,
                    message: "Insira no mínimo 10 caractéres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Insira no máximo 10 caractéres",
                  },
                  required: {
                    value: true,
                    message: "Insira uma data",
                  },
                })}
              />
              <button type="submit">
                <ArrowIcon />
              </button>
            </div>
            <div className="text-danger" style={{ marginLeft: 10 }}>
              {erros}
            </div>
            {errors.endDate && (errors.endDate as any).type === "minLength" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.endDate as any).message}
              </div>
            )}
            {errors.endDate && (errors.endDate as any).type === "maxLength" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.endDate as any).message}
              </div>
            )}
            {errors.endDate && (errors.endDate as any).type === "required" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.endDate as any).message}
              </div>
            )}
          </div>
        </FormContent>
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
        ) : allRelatorySDate && auxFilterSDate ? (
          <>
            <ExplainText>
              <ul>
                <li>
                  <span>FLR: </span>
                  Explosão solar (Solar Flare)
                </li>
                <li>
                  <span>SEP: </span> Partícula Energética Solar (Solar Energetic
                  Particle)
                </li>
                <li>
                  <span>CME: </span> Ejeção de massa coronal (Coronal Mass
                  Ejection)
                </li>
                <li>
                  <span>IPS:</span> Choque Interplanetário (Interplanetary
                  Shock)
                </li>
                <li>
                  <span>MPC:</span> Cruzamento de magnetopausa (Magnetopause
                  Crossing)
                </li>
                <li>
                  <span>RBE:</span> Aumento da correia de radiação (Radiation
                  Belt Enhancement)
                </li>
                <li>
                  <span>GST:</span> Tempestade Geomagnética (Geomagnetic Storm)
                </li>
              </ul>
            </ExplainText>
            {auxWindowWidth > 768 ? (
              <>
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
                            auxFilterSDate.FLR?.length,
                            auxFilterSDate.SEP?.length,
                            auxFilterSDate.CME?.length,
                            auxFilterSDate.IPS?.length,
                            auxFilterSDate.MPC?.length,
                            auxFilterSDate.GST?.length,
                            auxFilterSDate.RBE?.length,
                            auxFilterSDate.Report?.length,
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
              </>
            ) : (
              <Table striped bordered hover variant="dark" responsive="md">
                <thead>
                  <tr>
                    <th>Tipo de Mensagem</th>
                    <th>Data</th>
                    <th>Mensagem</th>
                  </tr>
                </thead>
                <tbody>
                  {allRelatorySDate?.map(
                    (information: any, indexMap: number) => (
                      <tr
                        key={indexMap}
                        onClick={() => {
                          setActivePage("ThirdPage");
                          setAuxRelatoryView(information);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <td>{information.messageType}</td>
                        <td>
                          {FormateDateDonki(information.messageIssueTime)}
                        </td>
                        <td className="limitTdTable">
                          {information.messageBody.slice(152, 6000)}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            )}
          </>
        ) : (
          ""
        )}
        {openModal && (
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            index={auxIndexSelected}
            SpecificDate={true}
          />
        )}
      </Container>
    </>
  );
};

export default FirstPage;
