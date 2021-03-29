import React from "react";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";
import print1 from "../../../../assets/DONKI/print1.jpeg";
import print2 from "../../../../assets/DONKI/print2.jpeg";
import { Table } from "react-bootstrap";
import {
  Container,
  TextContainer,
  Title,
  Text,
  ImageContent,
  MyImage,
  Code,
} from "./styles";
const AboutPage: React.FC = () => {
  return (
    <>
      <div style={{ width: "100vw" }}>
        <Particles
          options={particleOptions as unknown}
          style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
        />
        <Container>
          <TextContainer>
            <div>
              <Title>
                Space Weather Database Of Notifications, Knowledge, Information
                (DONKI)
              </Title>
              <Text>
                <a href="https://ccmc.gsfc.nasa.gov/donki/">
                  O Banco de Dados de Notificações, Conhecimento e Informações
                  do Clima Espacial (DONKI)
                </a>{" "}
                é uma ferramenta on-line abrangente para meteorologistas,
                cientistas e a comunidade científica espacial em geral. DONKI
                fornece crônicas as interpretações diárias de observações do
                clima espacial, análises, modelos, previsões e notificações
                fornecidas pelo Centro de Pesquisa do Clima Espacial (SWRC),
                funcionalidade de pesquisa de base de conhecimento abrangente
                para apoiar a resolução de anomalias e pesquisa de ciência
                espacial, ligações inteligentes, relações causa e efeitos entre
                as atividades do clima espacial e acesso abrangente da API do
                serviço da web às informações armazenadas no DONKI
              </Text>
              <Title className="AboutExempleText">Exemplo:</Title>
              <ImageContent>
                <MyImage src={print1} style={{ marginRight: "2%" }} />
                <MyImage src={print2} />
              </ImageContent>
            </div>
            <div style={{ marginTop: "10%" }}>
              <Title>#ForDevs</Title>
              <Title className="AboutExempleText">Notifications:</Title>
              <Code style={{ marginBottom: "5%" }}>
                https://api.nasa.gov/DONKI/notifications?startDate=2014-05-01&endDate=2014-05-08&type=all&api_key=DEMO_KEY
              </Code>
              <Title
                className="AboutExempleText"
                style={{ marginBottom: "2%" }}
              >
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
                    <td>
                      Data de início para pesquisa de relatórios (máximo 30
                      dias)
                    </td>
                  </tr>
                  <tr>
                    <td>end_date</td>
                    <td>YYYY-MM-DD</td>
                    <td>7 dia após start_date</td>
                    <td>
                      Data final para pesquisa de relatórios (máximo 30 dias)
                    </td>
                  </tr>
                  <tr>
                    <td>type</td>
                    <td>string</td>
                    <td>all</td>
                    <td>Tipo de relatório</td>
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
    </>
  );
};

export default AboutPage;
