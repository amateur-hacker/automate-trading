import { Ribbon } from "@/Constant";
import { ColoredRibbonsData, RibbonData } from "@/Data/BonusUi/Ribbons";
import { Card, CardBody, Col, Row } from "reactstrap";

const ColoredRibbons = () => {
  return (
    <CardBody className="ribbons-main">
      <Row>
        <Col sm="12" md="6" lg="4">
          <Card className="ribbon-wrapper">
            <CardBody>
              <div className="ribbon ribbon-primary ribbon-space-bottom">{Ribbon}</div>
              <p>{RibbonData}</p>
            </CardBody>
          </Card>
        </Col>
        {ColoredRibbonsData.map((item) => (
          <Col key={item} sm="12" md="6" lg="4">
            <Card className="ribbon-wrapper">
              <CardBody>
                <div className="ribbon ribbon-primary ribbon-space-bottom">{Ribbon}</div>
                <p>{RibbonData}</p>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};

export default ColoredRibbons;
