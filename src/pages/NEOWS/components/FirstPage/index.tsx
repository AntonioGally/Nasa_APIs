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
  const [nasaCount, setNasaCount] = useState(0);
  const [erros, setErros] = useState("");
  const [dataInformation, setDataInformation] = useState<apiStructure[]>();
  const { register, handleSubmit, errors } = useForm<TextForm>();

  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    var finalDate = FormateDateInput(data.SpecificDate);

    if (finalDate === "O ano mínimo é 1995") {
      setErros(finalDate);
    } else {
      const results = await FeedInformation(finalDate, MyKey());
      if (results) {
        setDataInformation(results.near_earth_objects[finalDate]);
        setNasaCount(results.element_count);
        console.log(results);
        setLoading(false);
      }
    }
  };

  function dataConfig() {
    var min = Math.ceil(0);
    var max = Math.floor(50);

    const dataChart = [
      {
        label: "Asteroid caralho",
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
        backgroundColor: "red",
        hoverBackgroundColor: "red",
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
            <h1 style={{ color: "white" }}>{nasaCount}</h1>
            <ContentChart>
              <Bubble data={{ datasets: dataConfig() }} />
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
