import { ABCSeller, BuyingOption, XYZSeller } from "@/Constant";
import { FiveStarRating, OneStarRating } from "@/Data/Forms/FormControl";
import { Badge, Card, Col, Input, Label, Media } from "reactstrap";

const BuyingOptions = () => {
  return (
    <>
      <Col sm="12">
        <p className="mega-title mb-2">{BuyingOption}</p>
      </Col>
      <Col sm="6">
        <Card className="mb-0">
          <Media className="p-20 ">
            <div className="radio radio-warning me-3">
              <Input id="radio26" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio26"></Label>
            </div>
            <Media body>
              <h6 className="mt-0 mega-title-badge">
                {XYZSeller}
                <Badge color="warning" className="pull-right digits">
                  {"250 INR"}
                </Badge>
              </h6>
              {FiveStarRating}
            </Media>
          </Media>
        </Card>
      </Col>
      <Col sm="6">
        <Card className="mb-0">
          <Media className="p-20">
            <div className="radio radio-danger me-3">
              <Input id="radio27" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio27"></Label>
            </div>
            <Media body className="flex-grow-1">
              <h6 className="mt-0 mega-title-badge">
                {ABCSeller}
                <Badge color="danger" className=" pull-right digits">
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
