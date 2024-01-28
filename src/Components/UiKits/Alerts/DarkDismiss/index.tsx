import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Dismissing } from "@/Constant";
import { AlertWithDarkDismissData, AlertWithDarkDismissSubHeading } from "@/Data/UiKits/Alert/AlertWithDarkDismissData";
import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import CommonAlert from "../Common/CommonAlert";

const AlertWithDarkDismiss = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: "708px" }}>
        <CommonCardHeader heading={Dismissing} subHeading={AlertWithDarkDismissSubHeading} />
        <CardBody>
          <Alert className="alert-dismissible" color="primary dark" isOpen={Open} target="Alert-1">
            <Button close color="default" id="Alert-1" onClick={Toggle}></Button>
            <p>
              <strong>Holy ! </strong>You can check in on some of those fields below.
            </p>
          </Alert>
          {AlertWithDarkDismissData.map((data) => (
            <CommonAlert key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithDarkDismiss;
