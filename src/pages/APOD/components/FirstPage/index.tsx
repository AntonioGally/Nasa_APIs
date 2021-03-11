import React, { memo, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useApodContex } from "../../../../context/ApodContext";
import MyKey from "../../../../MyKey";
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
        api_key: MyKey(),
      };
      await GetInformation(dataObj);
    };
    if (!dataGetInformation) {
      request();
    }
  }, [GetInformation, dataGetInformation]);
  return (
    <>
      {!dataGetInformation ? (
        <div
          style={{
            width: "calc(100% - 300px)",
            marginLeft: "auto",
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
      ) : (
        <>
          <Container>
            <TextContent>
              <Title>
                {dataGetInformation?.title} - {formattedDate}
              </Title>
              <Text>{dataGetInformation?.explanation}</Text>
            </TextContent>
            <ImageContent>
              <MyImage src={dataGetInformation?.url} alt="APOD of the day" />
            </ImageContent>
          </Container>
        </>
      )}
    </>
  );
};

export default memo(FirstPage);
