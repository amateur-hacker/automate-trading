import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DeliveryOption, VerticalStyle } from "@/Constant";
import { InlineStyleMegaOptionsData, VerticalStyleMegaOptionsSubHeading } from "@/Data/Forms/FormControl";
import { Badge, Card, CardBody, Col, Form, Input, Label, Media, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import BuyingOptions from "./BuyingOptions";

const VerticalStyleMegaOptions = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader heading={VerticalStyle} subHeading={VerticalStyleMegaOptionsSubHeading} />
        <CardBody>
          <Form className="mega-vertical">
            <Row>
              <Col sm="12">
                <p className="mega-title mb-2">{DeliveryOption}</p>
              </Col>
              {InlineStyleMegaOptionsData.map((item, i) => (
                <Col key={i} sm="6">
                  <Card>
                    <Media className="p-20 ">
                      <div className={`radio me-3 ${item.radioClass}`}>
                        <Input id={item.id} type="radio" name="radio1" value="option1" />
                        <Label htmlFor={item.id}></Label>
                      </div>
                      <Media body>
                        <h6 className="mt-0 mega-title-badge">
                          {item.title}
                          <Badge color={item.badgeColor} className="pull-right digits">
                            {item.badge}
                          </Badge>
                        </h6>
                        <p>{item.subTitle}</p>
                      </Media>
                    </Media>
                  </Card>
                </Col>
              ))}
              <BuyingOptions />
            </Row>
          </Form>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Card>
    </Col>
  );
};
export default VerticalStyleMegaOptions;
