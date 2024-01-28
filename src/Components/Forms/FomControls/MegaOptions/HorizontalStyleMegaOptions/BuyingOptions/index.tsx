import { ABCSeller, BuyingOption, XYZSeller } from "@/Constant";
import { FiveStarRating, OneStarRating } from "@/Data/Forms/FormControl";
import { Badge, Card, Col, Input, Label, Media } from "reactstrap";

const BuyingOptions = () => {
  return (
    <>
      <Col sm="3">
        <p className="mega-title mb-2">{BuyingOption}</p>
      </Col>
      <Col sm="9">
        <Card>
          <Media className="p-20 ">
            <div className="radio radio-success me-3">
              <Input id="radio32" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio32"></Label>
            </div>
            <Media body>
              <h6 className="mt-0 mega-title-badge">
                {XYZSeller}
                <Badge color="success" className="pull-right digits">
                  {"250 INR"}
                </Badge>
              </h6>
              {FiveStarRating}
            </Media>
          </Media>
        </Card>
      </Col>
      <Col sm="9 offset-sm-3">
        <Card className="mb-0">
          <Media className="p-20 d-flex">
            <div className="radio radio-info me-3">
              <Input id="radio33" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio33"></Label>
            </div>
            <Media body className="flex-grow-1">
              <h6 className="mt-0 mega-title-badge">
                {ABCSeller}
                <Badge color="info" className="pull-right digits">
                  {"150 INR"}
                </Badge>
              </h6>
              {OneStarRating}
            </Media>
          </Media>
        </Card>
      </Col>
    </>
  );
};

export default BuyingOptions;
