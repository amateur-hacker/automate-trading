import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HorizontalStyle } from "@/Constant";
import { HorizontalStyleMegaOptionsSubHeading } from "@/Data/Forms/FormControl";
import { Card, CardBody, Col, Form, Row } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import BuyingOptions from "./BuyingOptions";
import DeliveryOptions from "./DeliveryOptions";

const HorizontalStyleMegaOptions = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader heading={HorizontalStyle} subHeading={HorizontalStyleMegaOptionsSubHeading} />
        <CardBody>
          <Form className="mega-horizontal">
            <Row>
              <DeliveryOptions />
              <BuyingOptions />
            </Row>
          </Form>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Card>
    </Col>
  );
};

export default HorizontalStyleMegaOptions;
