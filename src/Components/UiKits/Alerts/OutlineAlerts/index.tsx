import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineAlerts } from "@/Constant";
import { OutlineAlertData } from "@/Data/UiKits/Alert";
import { OutlineAlertSubHeading } from "@/Data/UiKits/Alert/OutlineAlert";
import { Alert, Card, CardBody, Col } from "reactstrap";

const OutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: "708px" }}>
        <CommonCardHeader heading={OutlineAlerts} subHeading={OutlineAlertSubHeading} />
        <CardBody>
          <Alert color="primary outline">{"This is a info alert—check it out!"}</Alert>
          {OutlineAlertData.map((element) => (
            <Alert color={`${element.color} outline`}>{element.text}</Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAlert;
