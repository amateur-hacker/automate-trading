import { RibbonData, WithIconRibbonsData } from "@/Data/BonusUi/Ribbons";
import { Card, CardBody, Col } from "reactstrap";

const WithIconRibbons = () => {
  return (
    <>
      <Col sm="14" md="6" lg="4">
        <Card className="ribbon-vertical-left-wrapper">
          <CardBody>
            <div className="ribbon ribbon-primary ribbon-vertical-left">
              <i className="icofont icofont-love"></i>
            </div>
            <p>{RibbonData}</p>
          </CardBody>
        </Card>
      </Col>
      {WithIconRibbonsData.map((item, i) => (
        <Col key={i} sm="14" md="6" lg="4">
          <Card className={item.wrapperClass}>
            <CardBody>
              <div className={item.class}> {item.icon}</div>
              <p>{RibbonData}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default WithIconRibbons;
