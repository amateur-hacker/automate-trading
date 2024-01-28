import { BrandShippingData } from "@/Data/ECommerce";
import { Clock, Truck } from "react-feather";
import { Card, CardBody, Col, Input, Label, Media } from "reactstrap";

const BrandShipping = () => {
  return (
    <>
      <Col xl="2" md="6" className="box-col-6 xl-50 proorder-lg-1">
        <Card>
          <CardBody>
            <div className="filter-block">
              <h4>{"Brand"}</h4>
              <ul className="simple-list">
                {BrandShippingData.map((item, i) => (
                  <li key={i}>
                    <div className="form-check">
                      <Input className="form-check-input" id={item} type="checkbox" value="" />
                      <Label className="form-check-label" htmlFor={item}>
                        {item}
                      </Label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="collection-filter-block">
              <ul className=" pro-services">
                <li>
                  <Media>
                    <Truck />
                    &nbsp;
                    <Media body>
                      <h5>{"Free Shipping"}</h5>
                      <p>{"Free Shipping World Wide"}</p>
                    </Media>
                  </Media>
                </li>
                <li>
                  <Media>
                    <Clock />
                    &nbsp;
                    <Media body>
                      <h5>{"24 X 7 Service"}</h5>
                      <p>{"Online Service For New Customer"}</p>
                    </Media>
                  </Media>
                </li>
              </ul>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default BrandShipping;
