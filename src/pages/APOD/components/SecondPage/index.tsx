import React from "react";
import MyKey from "../../../../MyKey";
import { Spinner } from "react-bootstrap";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";
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
  Container,
  VideoContent,
  MyVideo,
} from "./styles";
import { useForm } from "react-hook-form";
import { Carousel } from "react-bootstrap";
import { useApodContex } from "../../../../context/ApodContext";

import {
  FormateDateInput,
  FormateDateApi,
} from "../../../../services/dateFormater";

type TextForm = {
  startDate: string;
  endDate: string;
};

const SecondPage: React.FC = () => {
  const [erros, setErros] = React.useState("");
  const { register, handleSubmit, errors } = useForm<TextForm>();
  const { startEndDate, dataStartEndDate } = useApodContex();
  const [loading, setLoading] = React.useState(false);

  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    var start_date = FormateDateInput(data.startDate);
    var end_date = FormateDateInput(data.endDate);

    if (
      start_date === "O ano mínimo é 1994" ||
      start_date === "Insira um ano válido"
    ) {
      setErros(start_date);
    } else if (
      end_date === "O ano mínimo é 1994" ||
      end_date === "Insira um ano válido"
    ) {
      setErros(end_date);
    } else {
      var dataObj = {
        start_date: start_date.toString(),
        end_date: end_date.toString(),
        api_key: MyKey(),
      };

      await startEndDate(dataObj);
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
        <FormContent onSubmit={handleSubmit(SubmitForm)} id="FirstContent">
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
        {!dataStartEndDate ? (
          <>
            {!loading ? (
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
                        {information.media_type === "video" ? (
                          <VideoContent>
                            <MyVideo
                              src={information.url}
                              scrolling="no"
                              frameBorder="0"
                              allowTransparency={true}
                              allow="encrypted-media"
                            />
                          </VideoContent>
                        ) : (
                          <MyImage
                            src={information.url}
                            alt="APOD of the day"
                          />
                        )}
                      </Carousel.Item>
                    ))}
                  </Carousel>
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

export default SecondPage;
