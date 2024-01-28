import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { NoBorder } from "@/Constant";
import { NoBorderMegaOptionsSubHeading } from "@/Data/Forms/FormControl";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMegaOptionsCard from "../Common/CommonMegaOptionsCard";

const NoBorderMegaOptions = () => {
  return (
    <Col sm="12" xl="6 " className="box-col-12">
      <Card>
        <CommonCardHeader heading={NoBorder} subHeading={NoBorderMegaOptionsSubHeading} />
        <CardBody>
          <Form className="mega-inline plain-style">
            <CommonMegaOptionsCard />
          </Form>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Card>
    </Col>
  );
};
export default NoBorderMegaOptions;
