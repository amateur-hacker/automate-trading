import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalScroll } from "@/Constant";
import { HorizontalScrollData, ParagraphContent } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, Row } from "reactstrap";

const HorizontalScrollbar = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={HorizontalScroll} />

        <CardBody>
          <ScrollBar style={{ height: "460px" }} className="horizontal-scroll scrollable-para">
            <div className="horz-scroll-content">
              <Row>
                <Col sm="3">
                  <p>{HorizontalScrollData}</p>
                </Col>
                {ParagraphContent.map((item, i) => (
                  <Col sm="3" key={i}>
                    <p>{item}</p>
                  </Col>
                ))}
              </Row>
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalScrollbar;
