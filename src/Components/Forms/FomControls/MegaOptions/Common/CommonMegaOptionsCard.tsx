import { COD, Fast } from "@/Constant";
import { Badge, Card, Col, Input, Label, Media, Row } from "reactstrap";

const CommonMegaOptionsCard = () => {
  return (
    <Row>
      <Col sm="6">
        <Card>
          <Media className="p-20">
            <div className="radio radio-primary me-3">
              <Input id="radio14" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio14"></Label>
            </div>
            <Media body>
              <h6 className="mt-0 mega-title-badge">
                {COD}
                <Badge color="primary" className=" pull-right digits">
                  {"50 INR"}
                </Badge>
              </h6>
              <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
            </Media>
          </Media>
        </Card>
      </Col>
      <Col sm="6">
        <Card>
          <Media className="p-20 ">
            <div className="radio radio-secondary me-3">
              <Input id="radio13" type="radio" name="radio1" value="option1" />
              <Label htmlFor="radio13"></Label>
            </div>
            <Media body>
              <h6 className="mt-0 mega-title-badge">
                {Fast}
                <Badge color="secondary" className=" pull-right digits">
                  {"50 INR"}
                </Badge>
              </h6>
              <p>{"Estimated 1 Day Shipping ( Duties end tax may be due delivery )"}</p>
            </Media>
          </Media>
        </Card>
      </Col>
    </Row>
  );
};

export default CommonMegaOptionsCard;
