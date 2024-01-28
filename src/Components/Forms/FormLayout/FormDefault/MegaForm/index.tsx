import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonCardFooter from "@/Components/Forms/FomControls/Common/CommonCardFooter";
import { Card, CardBody, Col } from "reactstrap";
import AccountInformation from "./AccountInformation";
import BillingInformation from "./BillingInformation";

const MegaForms = () => {
  return (
    <Col sm="12">
      <Card>
       <CommonCardHeader heading="Mega Form"/>
        <CardBody>
          <AccountInformation />
          <BillingInformation />
        </CardBody>
        <CommonCardFooter color="secondary" />
      </Card>
    </Col>
  );
};
export default MegaForms;
