import { OfferStyleBorder } from "@/Constant";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMegaOptionsCard from "../Common/CommonMegaOptionsCard";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OfferBorderMegaOptionsSubHeading } from "@/Data/Forms/FormControl";

const OfferBorderMegaOptions = () => {
  return (
    <Col sm="12" xl="6" className=" box-col-12">
      <Card>
        <CommonCardHeader heading={OfferStyleBorder} subHeading={OfferBorderMegaOptionsSubHeading} />
        <CardBody className="megaoptions-border-space-sm">
          <Form className="mega-inline offer-style">
            <CommonMegaOptionsCard />
          </Form>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Card>
    </Col>
  );
};
export default OfferBorderMegaOptions;
