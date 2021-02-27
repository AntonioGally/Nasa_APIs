import React, { memo, useEffect } from "react";

import { useApodContex } from "../../../../context/ApodContext";

const FirstPage: React.FC = () => {
  const { GetInformation, dataGetInformation } = useApodContex();

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
  }, [GetInformation]);

  return (
    <>
      <h1>{dataGetInformation?.title}</h1>
    </>
  );
};

export default memo(FirstPage);
