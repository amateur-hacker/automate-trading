import { COD, DeliveryOption, Fast } from "@/Constant";
import { Badge, Card, Col, Input, Label, Media } from "reactstrap";

const DeliveryOptions = () => {
  return (
    <>
      <Col sm="3">
        <p className="mega-title mb-2">{DeliveryOption}</p>
      </Col>
      <Col sm="9">
        <Card>
          <Media className="p-20">
            <div className="radio radio-primary me-3">
              <Input id="radio30" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio30"></Label>
            </div>
            <Media body>
              <h6 className="mt-0 mega-title-badge">
                {COD}
                <Badge color="primary" className="pull-right digits">
                  {"50 INR"}
                </Badge>
              </h6>
              <p>{"Estimated 5 Day Shipping ( Duties end tax may be due delivery )"}</p>
            </Media>
          </Media>
        </Card>
      </Col>
      <Col sm="9 offset-sm-3">
        <Card>
          <Media className="p-20">
            <div className="radio radio-secondary me-3">
              <Input id="radio31" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio31"></Label>
            </div>
            <Media body>
              <h6 className="mt-0 mega-title-badge">
                {Fast}
                <Badge color="secondary" className="pull-right digits">
                  {"100 INR"}
                </Badge>
              </h6>
              <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
            </Media>
          </Media>
        </Card>
      </Col>
    </>
  );
};

export default DeliveryOptions;
