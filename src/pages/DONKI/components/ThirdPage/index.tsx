import React from "react";
import { useDonkiContext } from "../../../../context/DonkiContext";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";
import { Container, TextContainer, Title, TextArea } from "./styles";
import { FormateDateDonki } from "../../../../services/dateFormater";

const ThirdPage: React.FC = () => {
  const { auxRelatoryView, setActivePage } = useDonkiContext();
  let auxList = [
    { name: "FLR", label: "Explosão solar (Solar Flare)" },
    {
      name: "SEP",
      label: "Partícula Energética Solar (Solar Energetic Particle)",
    },
    { name: "CME", label: "Ejeção de massa coronal (Coronal Mass Ejection)" },
    { name: "IPS", label: "Choque Interplanetário (Interplanetary Shock)" },
    {
      name: "MPC",
      label: "Cruzamento de magnetopausa (Magnetopause Crossing)",
    },
    {
      name: "RBE",
      label: "Aumento da correia de radiação (Radiation Belt Enhancement)",
    },
    { name: "GST", label: "Tempestade Geomagnética (Geomagnetic Storm)" },
    { name: "Report", label: "Reportagem" },
  ];
  return (
    <>
      <div style={{ width: "100vw" }}>
        <Particles
          options={particleOptions as unknown}
          style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
        />
        <Container>
          <TextContainer>
            {!auxRelatoryView && (
              <Title>
                Pesquise por um relatório específico clicando em um item de
                alguma tabela de{" "}
                <span onClick={() => setActivePage("FirstPage")}>
                  relatórios
                </span>
              </Title>
            )}
            {auxRelatoryView && (
              <>
                <Title onClick={() => console.log(auxRelatoryView)}>
                  {auxList.map((i) => {
                    if (i.name === auxRelatoryView.messageType) {
                      return `${i.label} - ${FormateDateDonki(
                        auxRelatoryView.messageIssueTime
                      )}`;
                    } else return "";
                  })}
                </Title>
                <TextArea defaultValue={auxRelatoryView.messageBody} readOnly />
              </>
            )}
          </TextContainer>
        </Container>
      </div>
    </>
  );
};

export default ThirdPage;
