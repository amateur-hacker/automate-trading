import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Heading, SubHeading, ThisIsAHeading } from "@/Constant";
import { HeadingCardSubHeading, SubHeadingData } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col, Row } from "reactstrap";

const HeadingCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Heading} subHeading={HeadingCardSubHeading} />
        <CardBody className="typography radio-text">
          <Row>
            <Col sm="12" xl="6">
              <h1>{ThisIsAHeading} 1</h1>
              <h2>{ThisIsAHeading} 2</h2>
              <h3>{ThisIsAHeading} 3</h3>
              <h4>{ThisIsAHeading} 4</h4>
              <h5>{ThisIsAHeading} 5</h5>
              <h6>{ThisIsAHeading} 6</h6>
            </Col>
            <Col sm="12" xl="6">
              {SubHeadingData.map((item, i) => (
                <p key={i} className={item.className}>
                  {item.title}
                  <small>{SubHeading}</small>
                </p>
              ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingCard;
