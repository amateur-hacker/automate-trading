import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InlineStyle } from "@/Constant";
import { InlineStyleMegaOptionsData, InlineStyleMegaOptionsSubHeading } from "@/Data/Forms/FormControl";
import { Badge, Card, CardBody, Col, Form, Input, Label, Media, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";

const InlineStyleMegaOptions = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={InlineStyle} subHeading={InlineStyleMegaOptionsSubHeading} />
        <CardBody className="megaoptions-border-space-sm">
          <Form className="mega-inline">
            <Row>
              {InlineStyleMegaOptionsData.map((item, i) => (
                <Col key={i} sm="6">
                  <Card>
                    <Media className="p-20">
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
            </Row>
          </Form>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Card>
    </Col>
  );
};
export default InlineStyleMegaOptions;
