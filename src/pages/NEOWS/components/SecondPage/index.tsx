import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import MyKey from "../../../../MyKey";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";
import { useForm } from "react-hook-form";
import { useNeowsContext } from "../../../../context/NeowsContext";
import {
  Container,
  TextContainer,
  Title,
  FormContent,
  MyInput,
  ArrowIcon,
  SliderContent,
  TextContent,
  TextGrid,
  Info,
  LittleText,
  MyImage,
} from "./styles";

import { FormateDateApi } from "../../../../services/dateFormater";

import Grid from "@material-ui/core/Grid";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";

import Earth from "../../../../assets/NEOWS/Earth.png";
import Jupiter from "../../../../assets/NEOWS/Jupiter.png";
import Mars from "../../../../assets/NEOWS/Mars.png";
import Mercury from "../../../../assets/NEOWS/Merc.png";
import Netuno from "../../../../assets/NEOWS/Netuno.png";
import Saturn from "../../../../assets/NEOWS/Saturn.png";
import Uranus from "../../../../assets/NEOWS/Netuno.png";
import Venus from "../../../../assets/NEOWS/Venus.png";

const photos = [
  { LabelPt: "Terra", label: "Earth", image: Earth },
  { LabelPt: "Jupiter", label: "Jupiter", image: Jupiter },
  { LabelPt: "Marte", label: "Mars", image: Mars },
  { LabelPt: "Mercúrio", label: "Merc", image: Mercury },
  { LabelPt: "Netuno", label: "Netuno", image: Netuno },
  { LabelPt: "Saturno", label: "Saturn", image: Saturn },
  { LabelPt: "Urâno", label: "Uranus", image: Uranus },
  { LabelPt: "Venus", label: "Venus", image: Venus },
];

type TextForm = {
  SPK_ID: string;
};
//! A estrutura da API está no @Types
const SecondPage: React.FC = () => {
  // Valor do slider
  const [auxDate, setAuxDate] = useState({ min: 0, max: 0 }); //Auxiliar de minimo e maximo da lista de anos que a api devolve
  const [loading, setLoading] = useState(false); //Controle da exibição do spinner
  const [value, setValue] = useState(0);
  const [erros, setErros] = useState(""); //Erros da api
  const { register, handleSubmit, errors } = useForm<TextForm>(); //Formulário

  const {
    auxAsteroidInformation,
    setAuxAsteroidInformation,
    lookupData,
    setLookupData,
    LookupInformation,
    auxListYear, //Todos os anos que a api devolve
    setAuxListYear,
    // value,
    // setValue,
  } = useNeowsContext();

  useEffect(() => {
    //Aqui é uma maneira de ver se ele ja possui o id do asteroid (ele consegue fazer isso clicando no link "identificador" no modal da primeira pag)
    if (auxAsteroidInformation) {
      var year = auxAsteroidInformation.close_approach_data.map((i: any) => {
        return (
          i.close_approach_date[0] +
          i.close_approach_date[1] +
          i.close_approach_date[2] +
          i.close_approach_date[3]
        );
      }); //Se ele vier do modal, eu coloco o ano que ele achou o asteroid, assim o slider nao começa do zero
      setValue(Number(year));
      var obj = {
        SPK_ID: auxAsteroidInformation.id,
      };
      SubmitForm(obj);
    }
  }, [auxAsteroidInformation]);
  //Func do material
  const handleSliderChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  //Func do material
  const handleInputChange = (event: any) => {
    setValue(
      event.target.value === "" ? auxDate.min : Number(event.target.value)
    );
  };
  //Func do material
  const handleBlur = () => {
    if (value < auxDate.min) {
      setValue(auxDate.min);
    } else if (value > auxDate.max) {
      setValue(auxDate.max);
    }
  };

  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    setAuxAsteroidInformation("");
    const request = await LookupInformation(data.SPK_ID, MyKey());
    if (typeof request === "string") {
      // Se o context devolver uma string é pq o id não foi encontrado
      setErros(request);
    } else {
      setErros("");

      var auxList = request.close_approach_data.length;
      var auxMin =
        request.close_approach_data[0].close_approach_date[0] +
        request.close_approach_data[0].close_approach_date[1] +
        request.close_approach_data[0].close_approach_date[2] +
        request.close_approach_data[0].close_approach_date[3]; // Aqui eu pego o ano minimo

      var auxMax =
        request.close_approach_data[auxList - 1].close_approach_date[0] +
        request.close_approach_data[auxList - 1].close_approach_date[1] +
        request.close_approach_data[auxList - 1].close_approach_date[2] +
        request.close_approach_data[auxList - 1].close_approach_date[3]; // Aqui eu pego o ano máximo

      var count = 0;
      var yearList = [];
      while (count < auxList) {
        var auxObj = {
          value: Number(
            request.close_approach_data[count].close_approach_date[0] +
              request.close_approach_data[count].close_approach_date[1] +
              request.close_approach_data[count].close_approach_date[2] +
              request.close_approach_data[count].close_approach_date[3]
            // Aqui eu formato os anos que a api devolve em um objeto para que eu consiga inseri-lo de forma padronizada no componente do material
          ),
          label: FormateDateApi(
            request.close_approach_data[count].close_approach_date
          ),
        };
        yearList.push(auxObj);
        count++;
      } // Aqui eu pego todos os anos do request
      setAuxListYear(yearList);
      console.log(auxListYear);
      //O material ui não conseguiu renderizar todas as marcações
      var obj = {
        min: Number(auxMin),
        max: Number(auxMax),
      };
      setAuxDate(obj); //Aqui eu seto a data mínima e a máxima
      setLookupData(request);
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
            <Title>Asteroid SPK-ID:</Title>
            <div>
              <MyInput
                type="text"
                id="SPK_ID"
                name="SPK_ID"
                placeholder="Ex: 54106310"
                defaultValue={
                  auxAsteroidInformation ? auxAsteroidInformation.id : ""
                }
                ref={register({
                  required: {
                    value: true,
                    message: "Insira um SPK-ID",
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

            {errors.SPK_ID && (errors.SPK_ID as any).type === "required" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.SPK_ID as any).message}
              </div>
            )}
          </div>
        </FormContent>
        {loading && (
          <div
            style={{
              width: "calc(100% - 300px)",
              marginLeft: "auto",
              marginRight: "auto",
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
        )}
        {lookupData && (
          <>
            <TextContainer>
              <div>
                <Title>
                  <a
                    href={`${lookupData.nasa_jpl_url};orb=1;cov=0;log=0;cad=0#orb`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {lookupData.name}
                  </a>{" "}
                  - {lookupData.id}
                </Title>
              </div>
              <Title style={{ marginTop: "2%" }}>
                Dados da órbita em anos:
              </Title>
              <SliderContent>
                <Slider
                  value={value}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  style={{ marginRight: "20px", color: "var(--secundary)" }}
                  marks={auxListYear}
                  max={auxDate.max}
                  min={auxDate.min}
                  step={null}
                />
                <Input
                  value={value}
                  style={{ color: "white" }}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 1,
                    min: auxDate.min,
                    max: auxDate.max,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </SliderContent>
              {lookupData.close_approach_data.map((i: any, index: number) => {
                //Map de todos os dados dentro do array do asteroid
                var auxDateApi =
                  i.close_approach_date[0] +
                  i.close_approach_date[1] +
                  i.close_approach_date[2] +
                  i.close_approach_date[3];

                if (Number(auxDateApi) === value) {
                  return (
                    <>
                      <TextContent key={index}>
                        <Title style={{ marginBottom: "5%" }}>
                          {FormateDateApi(i.close_approach_date)}
                        </Title>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <TextGrid>
                              <div>
                                <Info>
                                  Velocidade:{" "}
                                  {Number(
                                    i.relative_velocity.kilometers_per_second
                                  ).toFixed(2)}{" "}
                                  Km/s
                                </Info>
                                <Info>
                                  Distância:{" "}
                                  {Number(i.miss_distance.lunar).toFixed(2)}{" "}
                                  Luas
                                </Info>
                              </div>
                              <div>
                                <LittleText>1 Lua = 384.400 km</LittleText>
                              </div>
                            </TextGrid>
                          </Grid>
                          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            {photos.map((x, index) => {
                              //Aqui eu tenho uma lista das imagens LOCAIS. Para controlar a exibição delas, simplesmente comparo com
                              //a label de cada uma com o parâmetro "orbiting_body" da API, se forem iguais, eu mostro
                              if (x.label === i.orbiting_body) {
                                return (
                                  <div key={index}>
                                    <Info style={{ marginBottom: 10 }}>
                                      Órbita: {x.LabelPt}
                                    </Info>
                                    <div
                                      style={{
                                        display: "flex",
                                        width: "100%",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <MyImage src={x.image} />;
                                    </div>
                                  </div>
                                );
                              } else return "";
                            })}
                          </Grid>
                        </Grid>
                      </TextContent>
                    </>
                  );
                } else return "";
              })}
            </TextContainer>
          </>
        )}
      </Container>
    </div>
  );
};

export default SecondPage;
