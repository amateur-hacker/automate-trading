import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { VerticalScroll } from "@/Constant";
import { HorizontalScrollData, ParagraphContent } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Card, CardBody, Col } from "reactstrap";

const VerticalScrollbar = () => {
  return (
    <Col sm="6" md="6">
      <Card>
        <CommonCardHeader heading={VerticalScroll} />
        <CardBody>
          <ScrollBar className="vertical-scroll ps-container ps-theme-default ps-active-y scrollable-para" style={{ width: "100%", height: 460 }}>
            <div>
              <p>{HorizontalScrollData}</p>
              {ParagraphContent.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticalScrollbar;
