import { Col,Card, CardBody, Row } from "reactstrap";
import { SquareCheckbox } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CustomSquare from "./CustomSquare";
import SolidCheckboxes from "./SolidCheckbox";

const SquareCheckboxes = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader heading={SquareCheckbox} />
        <CardBody>
          <Row>
            <CustomSquare />
            <SolidCheckboxes />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SquareCheckboxes;
