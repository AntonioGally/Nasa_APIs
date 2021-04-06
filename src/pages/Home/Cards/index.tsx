import React from "react";
import foto1 from "../../../assets/foto1.jpg";
import foto2 from "../../../assets/foto2.jpg";
import foto3 from "../../../assets/foto3.jpg";
import foto5 from "../../../assets/foto5.jpg";
import Grid from "@material-ui/core/Grid";
import { Container, MyCard, TextContent, Title, Text } from "./styles";

import { Link } from "react-router-dom";

const Cards: React.FC = () => {
  return (
    <>
      <Container>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            style={{ marginBottom: "3%" }}
          >
            <Link to="/apod">
              <MyCard style={{ backgroundImage: `url(${foto1})` }}>
                <TextContent>
                  <Title>APOD</Title>
                  <Text>Astronomy picture of today</Text>
                </TextContent>
              </MyCard>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            style={{ marginBottom: "3%" }}
          >
            <Link to="/neows">
              <MyCard
                style={{
                  backgroundImage: `url(${foto2})`,
                  backgroundPosition: "center",
                }}
              >
                <TextContent>
                  <Title>Asteroids - NeoWs</Title>
                  <Text>Near object Web Service</Text>
                </TextContent>
              </MyCard>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={4}
            xl={4}
            style={{ marginBottom: "3%" }}
          >
            <Link to="/donki">
              <MyCard
                style={{
                  backgroundImage: `url(${foto3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                }}
              >
                <TextContent style={{ bottom: "-20%" }}>
                  <Title>DONKI</Title>
                  <Text>
                    Space Weather Database Of Notifications, Knowledge,
                    Information
                  </Text>
                </TextContent>
              </MyCard>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Link to="/eonet">
              <MyCard
                style={{
                  backgroundImage: `url(${foto5})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <TextContent style={{ bottom: "-20%" }}>
                  <Title>EONET</Title>
                  <Text>The Earth Observatory Natural Event Tracker</Text>
                </TextContent>
              </MyCard>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cards;
