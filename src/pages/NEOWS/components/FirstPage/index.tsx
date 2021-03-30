import React, { useState } from "react";
import MyKey from "../../../../MyKey";
import { Spinner, Tooltip, OverlayTrigger } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNeowsContext } from "../../../../context/NeowsContext";
import { FormateDateInput } from "../../../../services/dateFormater";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";

import MyChart from "./MyChart";

import {
  Container,
  FormContent,
  Title,
  MyInput,
  ArrowIcon,
  ContentChart,
  ShuffleIcon,
} from "./styles";
import { generateDate } from "../../../../services/generateDate";
import ModalInformation from "./ModalInformation";

type TextForm = {
  SpecificDate: string;
};

const FirstPage: React.FC = () => {
  const {
    FeedInformation,
    dataInformation,
    dataInformationHadardous,
    setDataInformation,
    setDataInformationHazardous,
    additionalInfo,
    setAdditionalInfo,
    setAuxAsteroidInformation,
  } = useNeowsContext();
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState("");
  const [auxDate, setAuxDate] = useState("");
  const [open, setOpen] = useState(false);

  const { register, handleSubmit, errors } = useForm<TextForm>();

  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Data aleatória
    </Tooltip>
  );
  //Verificar se o obj ta vazio
  function isEmpty(obj: any) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }
  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    var finalDate = FormateDateInput(data.SpecificDate);

    if (finalDate === "O ano mínimo é 1996") {
      setErros(finalDate);
    } else if (finalDate === "Insira um ano válido") {
      setErros(finalDate);
    } else {
      setErros("");
      const results = await FeedInformation(finalDate, MyKey());
      if (results) {
        var auxListHazardour: any = [];
        var auxListNormal: any = [];
        if (isEmpty(results.near_earth_objects)) {
          setErros("Não existem asteroids nesse dia");
          setDataInformationHazardous("");
          setDataInformation("");
          setAdditionalInfo({
            Objects: 0,
            Date: "",
          });
        } else {
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
          setAdditionalInfo({
            Objects: results.element_count,
            Date: data.SpecificDate,
          });
        }
        setLoading(false);
      }
    }
  };

  function handleAleatoryDate() {
    var obj = {
      SpecificDate: generateDate(),
    };
    setAuxDate(obj.SpecificDate);
    return SubmitForm(obj);
  }

  function dataConfig() {
    const dataChart = [
      {
        label: "Inofensivos",
        data: dataInformation?.map((i: any, index: number) => {
          var x = index * 10;
          var y = Number(
            i.close_approach_data.map((x: any) => {
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
        label: "Perigosos",
        data: dataInformationHadardous?.map((i: any, index: number) => {
          var x = (index + 1) * 10;
          var y = Number(
            i.close_approach_data.map((x: any) => {
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
                defaultValue={auxDate ? auxDate : ""}
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
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
              >
                <ShuffleIcon onClick={() => handleAleatoryDate()} />
              </OverlayTrigger>
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
        ) : dataInformation ? (
          <>
            <ContentChart>
              <MyChart
                //tava dando problema de renderização nesse componente (antes eu tava chamando o Bublle diretamente por aqui)
                //quando eu digitava algo no input aparentemente mudava o state la do context e fazia esse componente renderizar denovo
                //Então eu fiz um componente a parte passando as props necessárias, depois utilizei o memo e ficou show (menos 1 problema de renderização)
                //! data={ {datasets: []} }
                dataProps={{ datasets: dataConfig() }}
                optionsProps={{
                  onClick: function (e: any) {
                    var element = this.getElementAtEvent(e);

                    // If you click on at least 1 element ...
                    if (element.length > 0) {
                      // Logs it
                      if (element[0]._datasetIndex === 0) {
                        // Se for o dataset de asteroid inofensivo eu pego as informações do index do dataset
                        // setActivePage("SecondPage");
                        setAuxAsteroidInformation(
                          dataInformation[element[0]._index]
                        );
                        setOpen(true);
                      } else if (element[0]._datasetIndex === 1) {
                        // Mesma coisa aqui com os asteróides perigosos
                        setAuxAsteroidInformation(
                          dataInformationHadardous?.[element[0]._index]
                        );
                        setOpen(true);
                      }

                      // Here we get the data linked to the clicked bubble ...
                      // var datasetLabel = this.config.data.datasets[
                      //   element[0]._datasetIndex
                      // ];

                      // console.log(datasetLabel);
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
                    text: `${additionalInfo.Objects} ${
                      additionalInfo.Objects > 1
                        ? "objetos próximos"
                        : "objeto próximo"
                    } no dia ${additionalInfo.Date}`,
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
      {open ? (
        <ModalInformation open={open} onClose={() => setOpen(false)} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FirstPage;
