import React, { memo } from "react";
import { Bubble } from "react-chartjs-2";
export interface Props {
  dataProps: any;
  optionsProps: any;
}

const FirstPage: React.FC<Props> = ({ dataProps, optionsProps }) => {
  return (
    <>
      <Bubble data={dataProps} options={optionsProps} />
    </>
  );
};

export default memo(FirstPage);
