import { FirstName, LastName, Username } from "@/Constant";
import { Col, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const PersonalDetailsBrowserForm = () => {
  return (
    <Row className="g-2">
      <Col md="4" className="mb-3">
        <Label className="mb-2">{FirstName}</Label>
        <Input type="text" placeholder="First name" required />
      </Col>
      <Col md="4" className="mb-3">
        <Label className="mb-2">{LastName}</Label>
        <Input type="text" placeholder="Last name" required />
      </Col>
      <Col md="4" className="mb-3">
        <Label className="mb-2">{Username}</Label>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input type="text" placeholder="Username" required />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default PersonalDetailsBrowserForm;
