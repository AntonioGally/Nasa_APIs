import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Table } from "react-bootstrap";

import { FormateDateDonki } from "../../../../../services/dateFormater";
import "./styles.css";
import { Title, CloseIcon } from "./FirstTab/FirstTabStyle";

import { useDonkiContext } from "../../../../../context/DonkiContext";

export interface Props {
  open: boolean;
  onClose: any;
  index: string;
}

const FirstTab: React.FC<Props> = ({ onClose, open, index }) => {
  const { auxFilter, setActivePage, setAuxRelatoryView } = useDonkiContext();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const StyledModal = withStyles({
    paper: {
      background: "var(--background2)",
      padding: "15px",
      borderRadius: 8,
    },
  })(Dialog);

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
      <StyledModal
        fullScreen={fullScreen}
        maxWidth="lg"
        open={open}
        onClose={onClose}
      >
        <DialogTitle style={{ color: "#fff", marginBottom: "5%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex" }}>
              {auxList.map((i, indexMap) => {
                if (i.name === index) {
                  return (
                    <Title style={{ marginBottom: 0 }} key={indexMap}>
                      {i.label}
                    </Title>
                  );
                } else return "";
              })}
            </div>

            <div>
              <CloseIcon onClick={onClose} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <Table striped bordered hover variant="dark" responsive="md">
            <thead>
              <tr>
                <th>Tipo de Mensagem</th>
                <th>Data</th>
                <th>Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {auxFilter[index].map((information: any, indexMap: number) => (
                <tr
                  key={indexMap}
                  onClick={() => {
                    setActivePage("ThirdPage");
                    setAuxRelatoryView(information);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <td>{information.messageType}</td>
                  <td>{FormateDateDonki(information.messageIssueTime)}</td>
                  <td className="limitTdTable">
                    {information.messageBody.slice(152, 6000)}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </DialogContent>
      </StyledModal>
    </>
  );
};

export default FirstTab;
