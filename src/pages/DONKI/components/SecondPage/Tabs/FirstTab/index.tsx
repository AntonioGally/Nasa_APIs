import React, { useState, useEffect } from "react";
import { useDonkiContext } from "../../../../../../context/DonkiContext";
import { Form, Table, Spinner } from "react-bootstrap";
import { FormateDateDonki } from "../../../../../../services/dateFormater";
import { Container, FormContent, Title, InformationContent } from "./styles";
import MyKey from "../../../../../../MyKey";
const FirstTab: React.FC = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!dataSpecificType) {
      Request();
    }
    // eslint-disable-next-line
  }, []);
  const {
    getTypeRelatory,
    dataSpecificType,
    setDataSpecificType,
    setActivePage,
    setAuxRelatoryView,
  } = useDonkiContext();
  const Request = async (type?: string) => {
    setLoading(true);
    if (type) {
      await getTypeRelatory(MyKey(), type).then((data: any) => {
        setLoading(false);
        setDataSpecificType(data);
      });
    } else {
      await getTypeRelatory(MyKey(), "rbe").then((data: any) => {
        setLoading(false);
        setDataSpecificType(data);
      });
    }
  };
  return (
    <>
      <Container>
        <FormContent>
          <Form.Group controlId="formGridState">
            <Title>Tipo de relatório:</Title>
            <Form.Control
              as="select"
              defaultValue="rbe"
              onChange={(e: any) => Request(e.target.value)}
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
          ) : dataSpecificType ? (
            <Table striped bordered hover variant="dark" responsive="md">
              <thead>
                <tr>
                  <th>Tipo de Mensagem</th>
                  <th>Data</th>
                  <th>Mensagem</th>
                </tr>
              </thead>
              <tbody>
                {dataSpecificType.map((information: any, indexMap: number) => (
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
          ) : (
            <div className="text-danger">
              Aparentemente não existem relatórios nesse intervalo de data
            </div>
          )}
        </InformationContent>
      </Container>
    </>
  );
};

export default FirstTab;
