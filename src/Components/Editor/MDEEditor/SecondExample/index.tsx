import dynamic from "next/dynamic";
import { useState } from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), { ssr: false });

const SecondExample = () => {
  const [value, setValue] = useState<string | undefined>();
  const handelChange = (e: string) => {
    setValue(e);
  };
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <h5>Second Example</h5>
            </CardHeader>
            <CardBody>
              <Row>
                <Col md="6">
                  <SimpleMDE
                    id="editor_container"
                    options={{
                      autofocus: true,
                      spellChecker: false,
                    }}
                    onChange={handelChange}
                  />
                </Col>
                <Col md='6' className="reader">
                  <h3>Instructions</h3>
                  <p>{"Enter text in the area on the left. For more info, click the ? (help) icon in the menu."}</p>
                  <br />
                  {value}
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SecondExample;
