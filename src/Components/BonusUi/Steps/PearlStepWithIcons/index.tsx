import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Pearls_Steps_Icon } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";

const PearlStepWithIcons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Pearls_Steps_Icon} />
        <CardBody>
          <Row>
            <Col xs="4" className="u-pearl done ">
              <div className="u-pearl-icon">
                <i className="icon-shopping-cart" aria-hidden="true"></i>
              </div>
              <span className="u-pearl-title">Account Info</span>
            </Col>
            <Col xs="4" className="u-pearl current">
              <div className="u-pearl-icon">
                <i className="icon-write" aria-hidden="true"></i>
              </div>
              <span className="u-pearl-title">Billing Info</span>
            </Col>
            <Col xs="4" className="u-pearl">
              <div className="u-pearl-icon">
                <i className="icon-check" aria-hidden="true"></i>
              </div>
              <span className="u-pearl-title">Confirmation</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PearlStepWithIcons;
