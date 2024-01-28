import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LeadHeading } from "@/Constant";
import { LeadSubHeading } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const Lead = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={LeadHeading} subHeading={LeadSubHeading} />
        <CardBody>
          <p className="lead radio-text">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Lead;
