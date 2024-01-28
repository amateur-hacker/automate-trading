import { Ribbon } from "@/Constant";
import { ColorRibbonsData, RibbonData } from "@/Data/BonusUi/Ribbons";
import { Card, CardBody, Col } from "reactstrap";

const ColorRibbons = () => {
  return (
    <>
      <Col sm="14" md="6" lg="4">
        <Card className="ribbon-wrapper">
          <CardBody>
            <div className="ribbon ribbon-primary">{Ribbon}</div>
            <p>{RibbonData}</p>
          </CardBody>
        </Card>
      </Col>
      {ColorRibbonsData.map((item, i) => (
        <Col key={i} sm="14" md="6" lg="4">
          <Card className="ribbon-wrapper">
            <CardBody>
              <div className={`ribbon ribbon-${item}`}>{Ribbon}</div>
              <p>{RibbonData}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default ColorRibbons;
