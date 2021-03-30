import React, { useState, useEffect } from "react";

import { useNeowsContext } from "../../../../context/NeowsContext";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import Earth from "../../../../assets/NEOWS/Earth.png";
import Jupiter from "../../../../assets/NEOWS/Jupiter.png";
import Mars from "../../../../assets/NEOWS/Mars.png";
import Mercury from "../../../../assets/NEOWS/Merc.png";
import Netuno from "../../../../assets/NEOWS/Netuno.png";
import Saturn from "../../../../assets/NEOWS/Saturn.png";
import Uranus from "../../../../assets/NEOWS/Netuno.png";
import Venus from "../../../../assets/NEOWS/Venus.png";

import {
  AsteroidName,
  MyDate,
  TextContent,
  Info,
  LittleText,
  MyImage,
  CloseIcon,
  TitleContent,
} from "./ModalStyles";

export interface Props {
  open: boolean;
  onClose: any;
}

const FirstPage: React.FC<Props> = ({ open, onClose }) => {
  const photos = [
    { LabelPt: "Terra", label: "Earth", image: Earth },
    { LabelPt: "Jupiter", label: "Jupiter", image: Jupiter },
    { LabelPt: "Marte", label: "Mars", image: Mars },
    { LabelPt: "Mercúrio", label: "Mercury", image: Mercury },
    { LabelPt: "Netuno", label: "Netuno", image: Netuno },
    { LabelPt: "Saturno", label: "Saturn", image: Saturn },
    { LabelPt: "Urâno", label: "Uranus", image: Uranus },
    { LabelPt: "Venus", label: "Venus", image: Venus },
  ];
  const {
    auxAsteroidInformation,
    additionalInfo,
    setActivePage,
  } = useNeowsContext();
  const theme = useTheme();
  const [auxPhoto, setAuxPhoto] = useState("");
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const StyledModal = withStyles({
    paper: {
      background: "var(--background2)",
      padding: "15px",
      borderRadius: 8,
    },
  })(Dialog);

  useEffect(() => {
    var aux = auxAsteroidInformation.close_approach_data.map((i: any) => {
      return i.orbiting_body;
    });
    setAuxPhoto(aux[0]);
  }, [auxAsteroidInformation.close_approach_data]);

  function diameter() {
    var calc =
      auxAsteroidInformation.estimated_diameter.meters.estimated_diameter_min +
      auxAsteroidInformation.estimated_diameter.meters.estimated_diameter_max /
        2;
    return calc.toFixed(2);
  }
  function velocity() {
    var aux = auxAsteroidInformation.close_approach_data.map((i: any) => {
      return i.relative_velocity.kilometers_per_second;
    });
    return Number(aux).toFixed(2);
  }
  function distancy() {
    var aux = auxAsteroidInformation.close_approach_data.map((i: any) => {
      return i.miss_distance.lunar;
    });
    return Number(aux).toFixed(2);
  }

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
            <TitleContent>
              <AsteroidName
                href={`${auxAsteroidInformation.nasa_jpl_url};orb=1;cov=0;log=0;cad=0#orb`}
                target="_blank"
              >
                {auxAsteroidInformation.name}{" "}
              </AsteroidName>{" "}
              <MyDate>{additionalInfo.Date}</MyDate>
            </TitleContent>
            <div>
              <CloseIcon onClick={onClose} />
            </div>
          </div>
        </DialogTitle>
        <DialogContent style={{ marginTop: "20px" }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <TextContent>
                <div>
                  <Info>
                    Magnitude: {auxAsteroidInformation.absolute_magnitude_h} h
                  </Info>
                  <Info>Diâmetro: {diameter()} Metros</Info>
                  <Info>Velocidade: {velocity()} Km/s</Info>
                  <Info>Distância: {distancy()} Luas</Info>
                  <Info
                    className="idModalInformation"
                    onClick={() => setActivePage("SecondPage")}
                  >
                    Identificador: {auxAsteroidInformation.id}
                  </Info>
                </div>
                <div>
                  <LittleText>1 Lua = 384.400 km</LittleText>
                </div>
              </TextContent>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              {photos.map((i, index) => {
                if (i.label === auxPhoto) {
                  return (
                    <div key={index}>
                      <Info style={{ marginBottom: 10 }}>
                        Órbita: {i.LabelPt}
                      </Info>
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "center",
                        }}
                      >
                        <MyImage src={i.image} />;
                      </div>
                    </div>
                  );
                } else return "";
              })}
            </Grid>
          </Grid>
        </DialogContent>
      </StyledModal>
    </>
  );
};

export default FirstPage;
