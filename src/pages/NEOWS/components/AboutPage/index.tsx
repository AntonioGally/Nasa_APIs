import React from "react";

import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";

import print1 from "../../../../assets/NEOWS/print1.png";
import print2 from "../../../../assets/NEOWS/print2.png";

import { Table } from "react-bootstrap";

import {
  Container,
  TextContainer,
  Title,
  Text,
  MyImage,
  ImageContent,
  Code,
} from "./styles";

const AboutPage: React.FC = () => {
  return (
    <div style={{ width: "100vw" }}>
      <Particles
        options={particleOptions as unknown}
        style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
      />
      <Container>
        <TextContainer>
          <div>
            <Title>Near Earth Object Web Service</Title>
            <Text>
              NeoWs (Near Earth Object Web Service) é um serviço da web RESTful
              para informações de asteróides próximos à Terra. Com os NeoWs, um
              usuário pode: pesquisar asteróides com base em sua data de
              aproximação mais próxima à Terra, pesquisar um asteróide
              específico com sua identificação de corpo pequeno NASA JPL, bem
              como navegar no conjunto de dados geral.
            </Text>
            <Title>Neo - Feed</Title>
            <Text>
              É uma área onde você pode procurar os asteróides por datas
              específicas. Os asteróides que passaram próximo à Terra são
              mostrados no gráfico.{" "}
              <strong>
                Quando o usuário clica no asteróide dentro do gráfico, é
                mostrado um pop-up especificando mais o asteróide clicado.{" "}
              </strong>
              Dentro do pop-up, é possível encontrar o SPK-ID, que leva-o
              automaticamente para a segunda página da aplicação.
            </Text>
            <Title>Neo - Lookup</Title>
            <Text>
              Esta área é específica para buscas de asteróides{" "}
              <strong>via SPK-ID do mesmo,</strong> onde é possível encontrar no
              pop-up de algum asteróide do gráfico na primeira página. Dentro da
              Neo Lookup, é possível visualizar os dados da órbita do Asteróide
              em relação aos anos que esses dados foram captados e/ou
              calculados.
            </Text>
            <Title className="AboutExempleText">Exemplo:</Title>
            <ImageContent>
              <MyImage src={print1} style={{ marginRight: "2%" }} />
              <MyImage src={print2} />
            </ImageContent>
          </div>
          <div style={{ marginTop: "10%" }}>
            <Title>#ForDevs</Title>
            <Title className="AboutExempleText">Neo - Feed:</Title>
            <Code style={{ marginBottom: "5%" }}>
              https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY
            </Code>
            <Title className="AboutExempleText" style={{ marginBottom: "2%" }}>
              Parâmetros da Query:
            </Title>
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
                  <td>start_date</td>
                  <td>YYYY-MM-DD</td>
                  <td>none</td>
                  <td>Data de início para pesquisa de asteróides</td>
                </tr>
                <tr>
                  <td>end_date</td>
                  <td>YYYY-MM-DD</td>
                  <td>7 dia após start_date</td>
                  <td>Data final para pesquisa de asteróides</td>
                </tr>
                <tr>
                  <td>api_key</td>
                  <td>string</td>
                  <td>DEMO_KEY</td>
                  <td>api.nasa.gov chave para uso expandido</td>
                </tr>
              </tbody>
            </Table>

            <Title className="AboutExempleText" style={{ marginTop: "10%" }}>
              Neo - Lookup:
            </Title>
            <Code style={{ marginBottom: "5%" }}>
              https://api.nasa.gov/neo/rest/v1/neo/3542519?api_key=DEMO_KEY
            </Code>
            <Title className="AboutExempleText" style={{ marginBottom: "2%" }}>
              Parâmetros da Query:
            </Title>
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
                  <td>asteroid_id</td>
                  <td>int</td>
                  <td>none</td>
                  <td>
                    O asteróide SPK-ID que se correlaciona com o NASA JPL small
                    body
                  </td>
                </tr>
                <tr>
                  <td>api_key</td>
                  <td>string</td>
                  <td>DEMO_KEY</td>
                  <td>api.nasa.gov chave para uso expandido</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </TextContainer>
      </Container>
    </div>
  );
};

export default AboutPage;
