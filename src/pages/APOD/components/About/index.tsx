import React from "react";

import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";

import { Table } from "react-bootstrap";

import { Container, TextContainer, Title, Text, MyImage, Code } from "./styles";

const About: React.FC = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Particles
        options={particleOptions as unknown}
        style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
      />
      <Container>
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
            <div style={{ textAlign: "center" }}>
              <MyImage src="https://api.nasa.gov/assets/img/general/apod.jpg" />
            </div>
          </div>
          <div style={{ marginTop: "10%" }}>
            <Title>#ForDevs</Title>
            <Title className="AboutExempleText">HTTP Request:</Title>
            <Code style={{ marginBottom: "2%" }}>
              GET https://api.nasa.gov/planetary/apod
            </Code>
            <Code style={{ marginBottom: "5%" }}>
              https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
            </Code>
            <Title className="AboutExempleText" style={{ marginBottom: "2%" }}>
              Parâmetros da Query:
            </Title>
            <div>
              <Table striped bordered hover variant="dark" responsive="md">
                <thead>
                  <tr>
                    <th>parâmetro</th>
                    <th>Tipo</th>
                    <th>Padrão</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>date</td>
                    <td>YYYY-MM-DD</td>
                    <td>today</td>
                    <td>A data da imagem APOD a ser recuperada</td>
                  </tr>
                  <tr>
                    <td>start_date</td>
                    <td>YYYY-MM-DD</td>
                    <td>none</td>
                    <td>
                      O início de um intervalo de datas, ao solicitar uma data
                      para um intervalo de datas. Não pode ser usado com data.
                    </td>
                  </tr>
                  <tr>
                    <td>end_date</td>
                    <td>YYYY-MM-DD</td>
                    <td>today</td>
                    <td>
                      O final do intervalo de datas, quando usado com
                      start_date.
                    </td>
                  </tr>
                  <tr>
                    <td>count</td>
                    <td>int</td>
                    <td>none</td>
                    <td>
                      Se for especificado, conte as imagens escolhidas
                      aleatoriamente será retornado. Não pode ser usado com data
                      ou start_date e data_final.
                    </td>
                  </tr>
                  <tr>
                    <td>thumbs</td>
                    <td>bool</td>
                    <td>False</td>
                    <td>
                      Retorne o URL da miniatura do vídeo. Se um APOD não for um
                      vídeo, este parâmetro será ignorado.
                    </td>
                  </tr>
                  <tr>
                    <td>api_key</td>
                    <td>string</td>
                    <td>DEMO_KEY</td>
                    <td>api.nasa.gov key for expanded usage</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </TextContainer>
      </Container>
    </div>
  );
};

export default About;
