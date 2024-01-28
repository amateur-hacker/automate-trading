import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Subscribe } from "@/Constant";
import { StandardPricingCardData } from "@/Data/ECommerce";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

const PricingCards = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading="Pricing" />
        <CardBody className="pricing-content pricing-col">
          <Row>
            {StandardPricingCardData.map((item, i) => {
              return (
                <Col sm="6" xl="3" className="xl-50 box-col-6" key={i}>
                  <Card className="pricing-block text-center">
                    <div className="pricing-header">
                      <h2>{item.title}</h2>
                      <div className="price-box">
                        <div>
                          <h3>{item.prize}</h3>
                          <p>{item.month}</p>
                        </div>
                      </div>
                    </div>
                    <div className="pricing-list">
                      <ul className="simple-list pricing-inner">
                        {item.storage.map((storage, i) => (
                          <li>
                            <h6 key={i}>
                              {storage[0]}
                              <span key={i}>{storage[1]}</span>
                            </h6>
                          </li>
                        ))}
                      </ul>
                      <Button color="primary" size="lg">
                        {Subscribe}
                      </Button>
                    </div>
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

export default PricingCards;
