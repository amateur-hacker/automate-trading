import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LorumIpsum, Purchase } from "@/Constant";
import { SimplePricingCardData } from "@/Data/ECommerce";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

const SimplePricingCards = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading="Simple Pricing Card" />
        <CardBody className="pricing-block">
          <Row>
            {SimplePricingCardData.map((item, i) => {
              return (
                <Col xl="3" sm="6" className="box-col-6 xl-50" key={i}>
                  <Card className="text-center pricing-simple">
                    <CardBody>
                      <h3>{item.title}</h3>
                      <h1>{item.prize}</h1>
                      <h6 className="mb-0">{LorumIpsum}</h6>
                    </CardBody>
                    <Button color="primary">{Purchase}</Button>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SimplePricingCards;
