import { Ribbon } from "@/Constant";
import { BottomRibbonClipData, RibbonData } from "@/Data/BonusUi/Ribbons";
import { Card, CardBody, Col } from "reactstrap";

const BottomClipRibbons = () => {
  return (
    <>
      <Col sm="14" md="6" lg="4">
        <Card className="ribbon-wrapper">
          <CardBody>
            <p>{RibbonData}</p>
            <div className="ribbon ribbon-clip-bottom ribbon-primary">{Ribbon}</div>
          </CardBody>
        </Card>
      </Col>
      {BottomRibbonClipData.map((item, i) => (
        <Col key={i} sm="14" md="6" lg="4">
          <Card className="ribbon-wrapper">
            <CardBody>
              <p>{RibbonData}</p>
              <div className={`ribbon ${item}`}>{Ribbon}</div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BottomClipRibbons;
