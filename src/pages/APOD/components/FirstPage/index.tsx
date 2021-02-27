import React, { memo, useEffect } from "react";

import { useApodContex } from "../../../../context/ApodContext";
import {
  Container,
  TextContent,
  Title,
  Text,
  ImageContent,
  MyImage,
} from "./styles";

const FirstPage: React.FC = () => {
  const { GetInformation, dataGetInformation, formattedDate } = useApodContex();
  useEffect(() => {
    const request = async () => {
      var dataObj = {
        api_key: "kcacmvZhtF2lHZT0y6Ogl4CEqOz8nOnE0ECcsJS6",
      };
      await GetInformation(dataObj);
    };
    if (!dataGetInformation) {
      request();
    }
  }, [GetInformation, dataGetInformation]);
  return (
    <>
      <Container>
        <TextContent>
          <Title>
            {dataGetInformation?.title} - {formattedDate}
          </Title>
          <Text>{dataGetInformation?.explanation}</Text>
        </TextContent>
        <ImageContent>
          <MyImage src={dataGetInformation?.hdurl} alt="APOD of the day" />
        </ImageContent>
      </Container>
    </>
  );
};

export default memo(FirstPage);
