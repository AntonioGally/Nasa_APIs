import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Spinner, Table } from "react-bootstrap";
import MyKey from "../../../../../../MyKey";
import {
  MonthVerification,
  FormateDateInput,
  FormateDateDonki,
} from "../../../../../../services/dateFormater";
import { useDonkiContext } from "../../../../../../context/DonkiContext";
import {
  Container,
  FormContent,
  Title,
  MyInput,
  ArrowIcon,
  MyButton,
  InformationContent,
} from "./styles";

interface TextForm {
  startDate: string;
  endDate: string;
  type: string;
}
const SecondTab: React.FC = () => {
  const [erros, setErros] = useState("");
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm<TextForm>();
  const {
    getSDateTypeRelatory,
    dataSDateType,
    setDataSDateType,
    setActivePage,
    setAuxRelatoryView,
  } = useDonkiContext();
  const SubmitForm = async (data: TextForm) => {
    setLoading(true);
    setErros("");

    var start_date = FormateDateInput(data.startDate);
    var end_date = FormateDateInput(data.endDate);

    if (
      start_date === "O ano mínimo é 1996" ||
      start_date === "Insira um ano válido"
    ) {
      setErros(start_date);
    } else if (
      end_date === "O ano mínimo é 1996" ||
      end_date === "Insira um ano válido"
    ) {
      setErros(end_date);
      //Passando pela verificação de ano válido ou inválido
    } else {
      var obj = {
        start_date: data.startDate,
        end_date: data.endDate,
      };
      if (MonthVerification(obj)) {
        await getSDateTypeRelatory(
          MyKey(),
          data.type,
          FormateDateInput(data.startDate),
          FormateDateInput(data.endDate)
        ).then((data: any) => {
          if (data) {
            setLoading(false);
            setErros("");
            setDataSDateType(data);
          } else {
            setErros(
              "Aparentemente não existem relatórios nesse intervalo de data"
            );
          }
        });
      } else {
        //Inválido
        setLoading(false);
        setErros("Insira um intervalo de no máximo 30 dias, a partir de 2010");
      }
    }
  };
  return (
    <>
      <Container>
        <FormContent onSubmit={handleSubmit(SubmitForm)}>
          <div>
            <Title>Data de início:</Title>
            <MyInput
              type="text"
              id="startDate"
              name="startDate"
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

            {errors.startDate &&
              (errors.startDate as any).type === "minLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.startDate as any).message}
                </div>
              )}
            {errors.startDate &&
              (errors.startDate as any).type === "maxLength" && (
                <div className="text-danger" style={{ marginLeft: 10 }}>
                  {(errors.startDate as any).message}
                </div>
              )}
            {errors.startDate && (errors.startDate as any).type === "required" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.startDate as any).message}
              </div>
            )}
          </div>
          <div>
            <Title>Data final:</Title>
            <div>
              <MyInput
                type="text"
                id="endDate"
                name="endDate"
                placeholder="Ex: 20/11/2002"
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
            </div>

            {errors.endDate && (errors.endDate as any).type === "minLength" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.endDate as any).message}
              </div>
            )}
            {errors.endDate && (errors.endDate as any).type === "maxLength" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.endDate as any).message}
              </div>
            )}
            {errors.endDate && (errors.endDate as any).type === "required" && (
              <div className="text-danger" style={{ marginLeft: 10 }}>
                {(errors.endDate as any).message}
              </div>
            )}
          </div>
          <Form.Group>
            <Title>Tipo de relatório:</Title>
            <div>
              <Form.Control
                as="select"
                defaultValue="rbe"
                id="type"
                name="type"
                ref={register({
                  required: {
                    value: true,
                    message: "Insira um tipo",
                  },
                })}
              >
                <option value="flr">Explosão solar</option>
                <option value="sep">Partícula Energética Solar</option>
                <option value="cme">Ejeção de massa coronal</option>
                <option value="ips">Choque Interplanetário</option>
                <option value="mpc">Cruzamento de magnetopausa</option>
                <option value="rbe">Aumento da correia de radiação</option>
                <option value="gst">Tempestade Geomagnética</option>
                <option value="report">Reportagem</option>
              </Form.Control>
              <MyButton type="submit">
                <ArrowIcon />
              </MyButton>
            </div>
            <div className="text-danger" style={{ marginLeft: 10 }}>
              {erros}
            </div>
          </Form.Group>
        </FormContent>
        <InformationContent>
          {loading ? (
            <div
              style={{
                width: "calc(100% - 300px)",
                margin: "10% auto 0",
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
            dataSDateType && (
              <Table striped bordered hover variant="dark" responsive="md">
                <thead>
                  <tr>
                    <th>Tipo de Mensagem</th>
                    <th>Data</th>
                    <th>Mensagem</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSDateType.map((information: any, indexMap: number) => (
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
            )
          )}
        </InformationContent>
      </Container>
    </>
  );
};

export default SecondTab;
