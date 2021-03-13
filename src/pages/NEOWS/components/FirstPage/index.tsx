import React, { useState } from "react";
import MyKey from "../../../../MyKey";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Bubble } from "react-chartjs-2";
import { useNeowsContext } from "../../../../context/NeowsContext";
import { apiStructure } from "../../../../@types/neows";
import { FormateDateInput } from "../../../../services/dateFormater";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";

import {
  Container,
  FormContent,
  Title,
  MyInput,
  ArrowIcon,
  ContentChart,
} from "./styles";

type TextForm = {
  SpecificDate: string;
};

const FirstPage: React.FC = () => {
  const { FeedInformation } = useNeowsContext();
  const [loading, setLoading] = useState(false);
  const [auxDate, setAuxDate] = useState("");
  const [nasaCount, setNasaCount] = useState(0);
  const [erros, setErros] = useState("");
  const [dataInformationHadardous, setDataInformationHazardous] = useState<
    apiStructure[]
  >();
  const [dataInformation, setDataInformation] = useState<apiStructure[]>();
  const { register, handleSubmit, errors } = useForm<TextForm>();

  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    setAuxDate(data.SpecificDate);
    var finalDate = FormateDateInput(data.SpecificDate);

    if (finalDate === "O ano mínimo é 1995") {
      setErros(finalDate);
    } else if (finalDate === "Insira um ano válido") {
      setErros(finalDate);
    } else {
      setErros("");
      const results = await FeedInformation(finalDate, MyKey());
      if (results) {
        var auxListHazardour: any = [];
        var auxListNormal: any = [];
        results.near_earth_objects[finalDate].map((i: any) => {
          if (i.is_potentially_hazardous_asteroid) {
            auxListHazardour.push(i);
          } else {
            auxListNormal.push(i);
          }
          return "";
        });
        setDataInformationHazardous(auxListHazardour);
        setDataInformation(auxListNormal);
        setNasaCount(results.element_count);
        setLoading(false);
      }
    }
  };
  function dataConfig() {
    var min = Math.ceil(0);
    var max = Math.floor(50);
    console.log(dataInformationHadardous);

    const dataChart = [
      {
        label: "Asteróides Inofensivos",
        data: dataInformation?.map((i) => {
          var aleatoryNumber = Math.floor(Math.random() * (max - min)) + min; //gerando um numero inteiro aleatório entre 0 e 100
          var x = aleatoryNumber;
          var y = Number(
            i.close_approach_data.map((x) => {
              return Number(x.miss_distance.lunar);
            })
          );

          var Average_r = Number(
            (i.estimated_diameter.meters.estimated_diameter_max +
              i.estimated_diameter.meters.estimated_diameter_min) /
              2
          ); // média do tamanho
          var r = 10;
          if (Average_r > 0 && Average_r < 200) {
            r = 10;
          } else if (Average_r >= 200 && Average_r < 400) {
            r = 15;
          } else if (Average_r >= 400 && Average_r < 600) {
            r = 20;
          } else if (Average_r >= 600 && Average_r < 800) {
            r = 25;
          } else {
            r = 30;
          }
          var obj = {
            x: x,
            y: Number(y.toFixed(1)),
            r: r,
          };
          return obj;
        }),
        backgroundColor: "white",
        hoverBackgroundColor: "white",
        hoverBorderWidth: 3,
        borderColor: "pink",
      },

      {
        label: "Asteróides Perigosos",
        data: dataInformationHadardous?.map((i) => {
          var aleatoryNumber = Math.floor(Math.random() * (max - min)) + min; //gerando um numero inteiro aleatório entre 0 e 100
          var x = aleatoryNumber;
          var y = Number(
            i.close_approach_data.map((x) => {
              return Number(x.miss_distance.lunar);
            })
          );

          var Average_r = Number(
            (i.estimated_diameter.meters.estimated_diameter_max +
              i.estimated_diameter.meters.estimated_diameter_min) /
              2
          ); // média do tamanho
          var r = 10;
          if (Average_r > 0 && Average_r < 200) {
            r = 10;
          } else if (Average_r >= 200 && Average_r < 400) {
            r = 15;
          } else if (Average_r >= 400 && Average_r < 600) {
            r = 20;
          } else if (Average_r >= 600 && Average_r < 800) {
            r = 25;
          } else {
            r = 30;
          }
          var obj = {
            x: x,
            y: Number(y.toFixed(1)),
            r: r,
          };
          return obj;
        }),
        backgroundColor: "#dc3545",
        hoverBackgroundColor: "#dc3545",
        hoverBorderWidth: 3,
        borderColor: "pink",
      },
    ];
    return dataChart;
  }

  return (
    <div style={{ width: "100vw" }}>
      <Particles
        options={particleOptions as unknown}
        style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
      />

      <Container>
        <FormContent onSubmit={handleSubmit(SubmitForm)} id="SecondContent">
          <div>
            <Title>Data:</Title>
            <div>
              <MyInput
                type="text"
                id="SpecificDate"
                name="SpecificDate"
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
              <button type="submit">
                <ArrowIcon />
              </button>
            </div>
            <div className="text-danger" style={{ marginLeft: 10 }}>
              {erros}
            </div>
            {errors.SpecificDate &&
              (errors.SpecificDate as any).type === "minLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.SpecificDate as any).message}
                </div>
              )}
            {errors.SpecificDate &&
              (errors.SpecificDate as any).type === "maxLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.SpecificDate as any).message}
                </div>
              )}
            {errors.SpecificDate &&
              (errors.SpecificDate as any).type === "required" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.SpecificDate as any).message}
                </div>
              )}
          </div>
        </FormContent>
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
        ) : dataInformation ? (
          <>
            <ContentChart>
              <Bubble
                data={{
                  datasets: dataConfig(),
                }}
                options={{
                  onClick: function (e: any) {
                    var element = this.getElementAtEvent(e);

                    // If you click on at least 1 element ...
                    if (element.length > 0) {
                      // Logs it
                      console.log(element[0]);

                      // Here we get the data linked to the clicked bubble ...
                      // var datasetLabel = this.config.data.datasets[
                      //   element[0]._datasetIndex
                      // ].label;
                      // data gives you `x`, `y` and `r` values
                      // var data = this.config.data.datasets[
                      //   element[0]._datasetIndex
                      // ].data[element[0]._index];
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
                      label: function (tooltipItem: any, data: any) {
                        // var label =
                        //   data.datasets[tooltipItem.datasetIndex].label || "";

                        // if (label) {
                        //   label += ": ";
                        // }
                        var label = "";
                        label += Math.round(tooltipItem.yLabel * 100) / 100;
                        return label + " Luas de distância";
                      },
                    },
                  },
                  title: {
                    display: true,
                    position: "top",
                    fontSize: 20,
                    fontColor: "rgb(255, 255, 255)",
                    text: `${nasaCount} ${
                      nasaCount > 1 ? "objetos próximos" : "objeto próximo"
                    } no dia ${auxDate}`,
                  },
                  scales: {
                    yAxes: [
                      {
                        scaleLabel: {
                          display: true,
                          labelString: "Distância da Terra",
                          fontColor: "#fff",
                          lineHeight: 2.0,
                          fontSize: 20,
                          fontFamily: "Poppins",
                        },
                        gridLines: {
                          color: "#fff",
                        },
                        ticks: {
                          fontColor: "#fff",
                          fontFamily: "Poppins",
                          fontSize: "16",
                          // Include a Luas sign in the ticks
                          callback: function (value: any) {
                            return value + " Luas";
                          },
                        },
                      },
                    ],
                    xAxes: [
                      {
                        ticks: {
                          display: false,
                        },
                      },
                    ],
                  },
                }}
              />
            </ContentChart>
          </>
        ) : (
          ""
        )}
      </Container>
    </div>
  );
};

export default FirstPage;
