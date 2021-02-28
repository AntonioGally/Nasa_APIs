import React from "react";

import {
  Container,
  FormContent,
  Title,
  MyInput,
  ArrowIcon,
  TextContent,
  TitleCarousel,
  Text,
  ImageContent,
  MyImage,
} from "./styles";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Carousel } from "react-bootstrap";
import { useApodContex } from "../../../../context/ApodContext";
import lua from "../../../../assets/APOD/lua.png";

import { FormateDateApi } from "../../../../services/dateFormater";

type TextForm = {
  qtd_photos: string;
};

const ThirdPage: React.FC = () => {
  const { AleatoryDate, dataAleatoryDate } = useApodContex();
  const [loading, setLoading] = React.useState(false);

  const { register, handleSubmit, errors } = useForm<TextForm>();

  const SubmitForm = async (data: TextForm) => {
    var count = Number(data.qtd_photos);
    setLoading(true);
    var dataObj = {
      count: count,
      api_key: "kcacmvZhtF2lHZT0y6Ogl4CEqOz8nOnE0ECcsJS6",
    };
    await AleatoryDate(dataObj);
    setLoading(false);
  };
  return (
    <>
      <Container>
        <FormContent onSubmit={handleSubmit(SubmitForm)}>
          <div>
            <Title>Número de fotos: </Title>
            <div>
              <MyInput
                type="text"
                id="qtd_photos"
                name="qtd_photos"
                placeholder="Ex: 8"
                ref={register({
                  min: {
                    value: 1,
                    message: "Insira no mínimo 1",
                  },
                  max: {
                    value: 20,
                    message: "Insira no máximo 20",
                  },
                  required: {
                    value: true,
                    message: "Insira um número",
                  },
                })}
              />
              <button type="submit">
                <ArrowIcon />
              </button>
            </div>
            {errors.qtd_photos && (errors.qtd_photos as any).type === "min" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.qtd_photos as any).message}
              </div>
            )}
            {errors.qtd_photos && (errors.qtd_photos as any).type === "max" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.qtd_photos as any).message}
              </div>
            )}
            {errors.qtd_photos &&
              (errors.qtd_photos as any).type === "required" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.qtd_photos as any).message}
                </div>
              )}
          </div>
        </FormContent>
        {!dataAleatoryDate ? (
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
                    {dataAleatoryDate?.map((information: any) => (
                      <Carousel.Item key={information.date}>
                        <TextContent>
                          <TitleCarousel>
                            {information.title} -{" "}
                            {FormateDateApi(information.date)}
                          </TitleCarousel>
                          <Text>{information.explanation}</Text>
                        </TextContent>
                        <MyImage
                          src={information.url}
                          alt="APOD Aleatory Date"
                        />
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
    </>
  );
};

export default ThirdPage;
