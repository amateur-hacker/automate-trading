import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LightAlerts } from "@/Constant";
import { LightAlertData, LightAlertSubHeading } from "@/Data/UiKits/Alert/LightAlertData";
import { Alert, Card, CardBody, Col } from "reactstrap";

const LightAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={LightAlerts} subHeading={LightAlertSubHeading} />
        <CardBody>
          <Alert color="primary">{"This is a info alert—check it out!"}</Alert>
          {LightAlertData.map((element, index) => (
            <Alert key={index} color={element.color}>
              {element.text}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightAlert;
