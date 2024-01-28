import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VerticalAlign } from "@/Constant";
import { VerticalAlignCardData } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const VerticalAlignCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={VerticalAlign} />
        <CardBody className="grid-showcase grid-align">
          <p>{"Use flexbox alignment utilities to vertically and horizontally align columns."}</p>
          <Row>
            <Col className=" align-self-start">
              <span>{"One of three columns"}</span>
            </Col>
            <Col className=" align-self-center">
              <span>{"One of three columns"}</span>
            </Col>
            <Col className=" align-self-end">
              <span>{"One of three columns"}</span>
            </Col>
          </Row>
          {VerticalAlignCardData.map((element, index) => (
            <Row key={index} className={element.name}>
              {element.children.map((item, index) => (
                <Col key={index}>
                  <span>{item}</span>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalAlignCard;
