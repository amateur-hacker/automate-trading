import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineAlertData, ThemeColorAlertSubHeading } from "@/Data/UiKits/Alert";
import { Alert, Card, CardBody, Col } from "reactstrap";

const ThemeColorAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading="Theme Color Alerts" subHeading={ThemeColorAlertSubHeading} />
        <CardBody>
          <Alert color="primary dark">{"This is a info alert—check it out!"}</Alert>
          {OutlineAlertData.map((element, index) => (
            <Alert key={index} color={`${element.color} dark`}>
              {element.text}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThemeColorAlert;
