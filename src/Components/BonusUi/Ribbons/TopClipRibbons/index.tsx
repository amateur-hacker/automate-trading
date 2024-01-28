import { Ribbon } from "@/Constant";
import { RibbonData, TopClipRibbonsData } from "@/Data/BonusUi/Ribbons";
import { Card, CardBody, Col } from "reactstrap";

const TopClipRibbons = () => {
  return (
    <>
      <Col sm="14" md="6" lg="4">
        <Card className="ribbon-wrapper">
          <CardBody>
            <div className="ribbon ribbon-clip ribbon-primary">{Ribbon}</div>
            <p>{RibbonData}</p>
          </CardBody>
        </Card>
      </Col>
      {TopClipRibbonsData.map((item, i) => (
        <Col key={i} sm="14" md="6" lg="4">
          <Card className="ribbon-wrapper">
            <CardBody>
              <div className={`ribbon ${item}`}>{Ribbon}</div>
              <p>{RibbonData}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TopClipRibbons;
