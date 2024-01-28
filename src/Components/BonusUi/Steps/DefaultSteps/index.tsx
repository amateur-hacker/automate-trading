import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Default_Step } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";

const DefaultSteps = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Default_Step} />
        <CardBody>
          <Row className="u-steps">
            <Col xs="4" className="u-step  ">
              <span className="u-step-number">1</span>
              <div className="u-step-desc">
                <span className="u-step-title">Shopping</span>
                <p>Choose what you want</p>
              </div>
            </Col>
            <Col xs="4" className="u-step current">
              <span className="u-step-number">2</span>
              <div className="u-step-desc">
                <span className="u-step-title">Billing</span>
                <p>Pay for the bill</p>
              </div>
            </Col>
            <Col xs="4" className="u-step">
              <span className="u-step-number">3</span>
              <div className="u-step-desc">
                <span className="u-step-title">Getting</span>
                <p>Waiting for goods</p>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default DefaultSteps;
