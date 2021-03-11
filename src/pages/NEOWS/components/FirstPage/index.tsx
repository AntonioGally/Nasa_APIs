import React from "react";
import MyKey from "../../../../MyKey";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Bubble } from "react-chartjs-2";

import { FormateDateInput } from "../../../../services/dateFormater";
import particleOptions from "../../stars.json";
import Particles from "react-tsparticles";

import {
  Container,
  FormContent,
  Title,
  MyInput,
  ArrowIcon,
  ContentChart,
} from "./styles";

type TextForm = {
  SpecificDate: string;
};

const FirstPage: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const { register, handleSubmit, errors } = useForm<TextForm>();
  const SubmitForm = async (data: TextForm) => {
    console.log(data);
  };
  const dataChart = [
    {
      label: "John",
      data: [
        {
          x: 1,
          y: 1,
          r: 10,
        },
      ],
      backgroundColor: "red",
      hoverBackgroundColor: "red",
    },
    {
      label: "John",
      data: [
        {
          x: 2,
          y: 1,
          r: 11,
        },
      ],
      backgroundColor: "blue",
      hoverBackgroundColor: "blue",
    },
    {
      label: "John",
      data: [
        {
          x: 3,
          y: 12,
          r: 12,
        },
      ],
      backgroundColor: "yellow",
      hoverBackgroundColor: "yellow",
    },
  ];
  return (
    <div style={{ width: "100vw" }}>
      <Particles
        options={particleOptions as unknown}
        style={{ width: "100vw", zIndex: -1000, position: "absolute" }}
      />

      <Container>
        <FormContent onSubmit={handleSubmit(SubmitForm)} id="SecondContent">
          <div>
            <Title>Data:</Title>
            <div>
              <MyInput
                type="text"
                id="SpecificDate"
                name="SpecificDate"
                placeholder="Ex: 17/11/2002"
                ref={register({
                  minLength: {
                    value: 10,
                    message: "Insira no mínimo 10 caractéres",
                  },
                  maxLength: {
                    value: 10,
                    message: "Insira no máximo 10 caractéres",
                  },
                  required: {
                    value: true,
                    message: "Insira uma data",
                  },
                })}
              />
              <button type="submit">
                <ArrowIcon />
              </button>
            </div>

            {errors.SpecificDate &&
              (errors.SpecificDate as any).type === "minLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.SpecificDate as any).message}
                </div>
              )}
            {errors.SpecificDate &&
              (errors.SpecificDate as any).type === "maxLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.SpecificDate as any).message}
                </div>
              )}
            {errors.SpecificDate &&
              (errors.SpecificDate as any).type === "required" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.SpecificDate as any).message}
                </div>
              )}
          </div>
        </FormContent>

        <ContentChart>
          <Bubble data={{ datasets: dataChart }} />
        </ContentChart>
      </Container>
    </div>
  );
};

export default FirstPage;
