import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Step_Sizing } from "@/Constant";
import { StepsSizingData, StepsSizingSubHeading } from "@/Data/BonusUi/Steps";
import { Card, CardBody, Col, Row } from "reactstrap";

const StepsSizing = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Step_Sizing} subHeading={StepsSizingSubHeading} />
        <CardBody>
          {StepsSizingData.map((item, i) => (
            <Row key={i} className={`u-steps${item}`}>
              <Col md="4" className="u-step ">
                <span className="u-step-icon icon wb-shopping-cart" aria-hidden="true" />
                <div className="u-step-desc">
                  <span className="u-step-title">Shopping</span>
                </div>
              </Col>
              <Col md="4" className="u-step  current">
                <span className="u-step-icon icon wb-pluse" aria-hidden="true" />
                <div className="u-step-desc">
                  <span className="u-step-title">Billing</span>
                </div>
              </Col>
              <Col md="4" className="u-step ">
                <span className="u-step-icon icon wb-time" aria-hidden="true" />
                <div className="u-step-desc">
                  <span className="u-step-title">Getting</span>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default StepsSizing;
