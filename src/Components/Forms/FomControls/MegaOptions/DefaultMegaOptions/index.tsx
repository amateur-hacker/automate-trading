import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultStyle } from "@/Constant";
import { DefaultMegaOptionsSubHeading } from "@/Data/Forms/FormControl";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMegaOptionsCard from "../Common/CommonMegaOptionsCard";

const DefaultMegaOptions = () => {
  return (
    <Col sm="12" xl="6 box-col-12">
      <Card>
        <CommonCardHeader heading={DefaultStyle} subHeading={DefaultMegaOptionsSubHeading} />
        <CardBody className="megaoptions-border-space-sm">
          <Form className="mega-inline">
            <CommonMegaOptionsCard />
          </Form>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Card>
    </Col>
  );
};
export default DefaultMegaOptions;
