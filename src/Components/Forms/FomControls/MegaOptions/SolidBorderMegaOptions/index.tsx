import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SolidBorderStyle } from "@/Constant";
import { SolidBorderMegaOptionsSubHeading } from "@/Data/Forms/FormControl";
import { Card, CardBody, Col, Form } from "reactstrap";
import CommonCardFooter from "../../Common/CommonCardFooter";
import CommonMegaOptionsCard from "../Common/CommonMegaOptionsCard";

const SolidBorderMegaOptions = () => {
  return (
    <Col sm="12" xl="6 " className="box-col-12">
      <Card>
        <CommonCardHeader heading={SolidBorderStyle} subHeading={SolidBorderMegaOptionsSubHeading} />
        <CardBody className="megaoptions-border-space-sm">
          <Form className="mega-inline border-style">
            <CommonMegaOptionsCard />
          </Form>
        </CardBody>
        <CommonCardFooter align={"text-end"} />
      </Card>
    </Col>
  );
};
export default SolidBorderMegaOptions;
