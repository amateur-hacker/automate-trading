import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineDarkAlerts } from "@/Constant";
import { DarkOutlineAlertData, DarkOutlineAlertSubHeading } from "@/Data/UiKits/Alert/DarkOutlineAlert";
import { Alert, Card, CardBody, Col } from "reactstrap";

const DarkOutlineAlert = () => {
  return (
    <Col sm="12" xl="6">
      <Card className=" height-equal" style={{ minHeight: "708px" }}>
        <CommonCardHeader heading={OutlineDarkAlerts} subHeading={DarkOutlineAlertSubHeading} />
        <CardBody>
          <Alert color="primary outline-2x">{"This is a info alert—check it out!"}</Alert>
          {DarkOutlineAlertData.map((element, index) => (
            <Alert key={index} color={`${element.color} outline-2x`}>
              {element.text}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkOutlineAlert;
