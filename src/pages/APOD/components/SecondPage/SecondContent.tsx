import React from "react";
import { Spinner } from "react-bootstrap";
import {
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
import lua from "../../../../assets/APOD/lua.png";

import {
  FormateDateInput,
  FormateDateApi,
} from "../../../../services/dateFormater";

type TextForm = {
  SpecificDate: string;
};

const SecondPage: React.FC = () => {
  const { OneDate, dataOneDate } = useApodContex();
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, errors } = useForm<TextForm>();

  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    var date = FormateDateInput(data.SpecificDate);
    var dataObj = {
      date: date.toString(),
      api_key: "kcacmvZhtF2lHZT0y6Ogl4CEqOz8nOnE0ECcsJS6",
    };
    await OneDate(dataObj);
    setLoading(false);
  };

  return (
    <>
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
          <div
            style={{
              maxWidth: "700px",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <img src={lua} alt="Lua Cartoon" style={{ width: "100%" }} />
          </div>
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
    </>
  );
};

export default SecondPage;
