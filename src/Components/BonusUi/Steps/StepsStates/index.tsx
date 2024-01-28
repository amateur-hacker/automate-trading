import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Step_States } from "@/Constant";
import { StepsStatesSubHeading } from "@/Data/BonusUi/Steps";
import { Card, CardBody, Col, Row } from "reactstrap";

const StepsStates = () => {
  return (
    <>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={Step_States} subHeading={StepsStatesSubHeading} />
          <CardBody>
            <Row className="row-lg">
              <Col xl="3" lg="6" className="">
                <div className="u-step done bg-primary">
                  <span className="u-step-number txt-primary">1</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Getting</span>
                    <p className="text-light">Waiting for the goods</p>
                  </div>
                </div>
              </Col>
              <Col xl="3" lg="6" className=" steps-md-mt  ">
                <div className="u-step error bg-secondary">
                  <span className="u-step-number txt-secondary">2</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Getting</span>
                    <p className="text-light">Waiting for the goods</p>
                  </div>
                </div>
              </Col>
              <Col xl="3" lg="6" className="lg-mt ">
                <div className="u-step current bg-success">
                  <span className="u-step-number txt-success">3</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Getting</span>
                    <p>Waiting for the goods</p>
                  </div>
                </div>
              </Col>
              <Col xl="3" lg="6" className="lg-mt ">
                <div className="u-step disabled">
                  <span className="u-step-number">4</span>
                  <div className="u-step-desc">
                    <span className="u-step-title">Getting</span>
                    <p>Waiting for the goods</p>
                  </div>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default StepsStates;
