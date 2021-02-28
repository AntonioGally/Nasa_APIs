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
import { Carousel } from "react-bootstrap";
import { useApodContex } from "../../../../context/ApodContext";
import lua from "../../../../assets/APOD/lua.png";

type TextForm = {
  startDate: string;
  endDate: string;
};

const SecondPage: React.FC = () => {
  const { startEndDate, dataStartEndDate } = useApodContex();
  const [loading, setLoading] = React.useState(false);
  function FormateDateInput(date: any) {
    var arr = [...date];
    var year = arr[6] + arr[7] + arr[8] + arr[9];
    var month = arr[3] + arr[4];
    var day = arr[0] + arr[1];
    return `${year}-${month}-${day}`;
  }
  function FormateDateApi(date: any) {
    var arr = [...date];
    var year = arr[0] + arr[1] + arr[2] + arr[3];
    var month = arr[5] + arr[6];
    var day = arr[8] + arr[9];
    return `${day}/${month}/${year}`;
  }
  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    var start_date = FormateDateInput(data.startDate);
    var end_date = FormateDateInput(data.endDate);
    var dataObj = {
      start_date: start_date.toString(),
      end_date: end_date.toString(),
      api_key: "kcacmvZhtF2lHZT0y6Ogl4CEqOz8nOnE0ECcsJS6",
    };
    await startEndDate(dataObj);
    setLoading(false);
  };
  const { register, handleSubmit, errors } = useForm<TextForm>();
  return (
    <>
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
          {errors.startDate && (errors.startDate as any).type === "minLength" && (
            <div className="text-danger" style={{ marginLeft: 10 }}>
              {(errors.startDate as any).message}
            </div>
          )}
          {errors.startDate && (errors.startDate as any).type === "maxLength" && (
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
      {!dataStartEndDate ? (
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
                <Carousel interval={7000}>
                  {dataStartEndDate?.map((information: any) => (
                    <Carousel.Item key={information.date}>
                      <TextContent>
                        <TitleCarousel>
                          {information.title} -{" "}
                          {FormateDateApi(information.date)}
                        </TitleCarousel>
                        <Text>{information.explanation}</Text>
                      </TextContent>
                      <MyImage src={information.url} alt="APOD Date interval" />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </ImageContent>{" "}
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

/**
 * Tem que criar uma nova função la no context só pra essa página, senão ele vai ficar tentando pegar o map do state e n tem
 */
