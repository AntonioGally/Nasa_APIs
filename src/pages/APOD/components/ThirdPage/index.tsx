import React from "react";
import MyKey from "../../../../MyKey";
import { Spinner } from "react-bootstrap";
import {
  Container,
  FormContent,
  Title,
  MyInput,
  ImageContent,
  ArrowIcon,
  MyImage,
  TextContent,
  TitleCarousel,
  Text,
} from "./styles";

import { useForm } from "react-hook-form";
import { useApodContex } from "../../../../context/ApodContext";

import {
  FormateDateInput,
  FormateDateApi,
} from "../../../../services/dateFormater";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";

type TextForm = {
  SpecificDate: string;
};

const ThirdPage: React.FC = () => {
  const { OneDate, dataOneDate } = useApodContex();
  const [erros, setErros] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, errors } = useForm<TextForm>();

  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    var date = FormateDateInput(data.SpecificDate);
    if (date === "O ano mínimo é 1994" || date === "Insira um ano válido") {
      setErros(date);
    } else {
      setErros("");
      var dataObj = {
        date: date,
        api_key: MyKey(),
      };
      await OneDate(dataObj);
      setLoading(false);
    }
  };

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
        {!dataOneDate ? (
          <>
            {!loading && erros === "" ? (
              ""
            ) : (
              <>
                <div
                  style={{
                    width: "calc(100% - 300px)",
                    margin: "10% auto",
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
              </>
            )}
          </>
        ) : (
          <>
            {!loading ? (
              <>
                <ImageContent>
                  <TextContent>
                    <TitleCarousel>
                      {dataOneDate.title} - {FormateDateApi(dataOneDate.date)}
                    </TitleCarousel>
                    <Text>{dataOneDate.explanation}</Text>
                  </TextContent>
                  <MyImage src={dataOneDate.url} alt="APOD Date interval" />
                </ImageContent>
              </>
            ) : (
              <>
                <div
                  style={{
                    width: "calc(100% - 300px)",
                    margin: "10% auto",
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
              </>
            )}
          </>
        )}
      </Container>
    </div>
  );
};

export default ThirdPage;
