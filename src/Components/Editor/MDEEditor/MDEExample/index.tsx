import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MDEExampleParagraph } from "@/Data/Editor";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const SimpleMDE = dynamic(()=> import('react-simplemde-editor') ,{ssr:false})

const MDEExample = () => {
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading="MDE Editor Example" />
          <CardBody>
            <SimpleMDE
              id="editor_container"
              value={MDEExampleParagraph}
              options={{
                autofocus: true,
                spellChecker: false,
              }}
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MDEExample;
