import React, { useState } from "react";

import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";
import { useForm } from "react-hook-form";
import { useNeowsContext } from "../../../../context/NeowsContext";
import {
  Container,
  TextContainer,
  Title,
  Text,
  FormContent,
  MyInput,
  ArrowIcon,
} from "./styles";

type TextForm = {
  SpecificDate: string;
};

const SecondPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [erros, setErros] = useState("");
  const { register, handleSubmit, errors } = useForm<TextForm>();

  const {
    auxAsteroidInformation,
    setAuxAsteroidInformation,
  } = useNeowsContext();

  const SubmitForm = async (data: TextForm) => {};
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
                id="SpecificDate"
                name="SpecificDate"
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

            {errors.SpecificDate &&
              (errors.SpecificDate as any).type === "required" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.SpecificDate as any).message}
                </div>
              )}
          </div>
        </FormContent>

        <TextContainer>
          <div>
            <Title>Astronomy Picture of the Day</Title>
            <Text>
              Um dos sites mais populares da NASA é o{" "}
              <a
                href="https://apod.nasa.gov/apod/astropix.html"
                target="_blank"
                rel="noreferrer"
              >
                Astronomy Picture of the Day
              </a>
              . Na verdade, este site é um dos sites{" "}
              <a href="https://analytics.usa.gov">mais populares</a> em todas as
              agências federais. Tem o apelo popular de um vídeo de Justin
              Bieber. Este ponto de extremidade estrutura as imagens APOD e os
              metadados associados para que possam ser reaproveitados para
              outros aplicativos.
            </Text>
            <Title className="AboutExempleText">Exemplo:</Title>
          </div>
        </TextContainer>
      </Container>
    </div>
  );
};

export default SecondPage;
