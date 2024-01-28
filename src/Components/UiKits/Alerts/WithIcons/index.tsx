import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AlertWithIcon } from "@/Constant";
import { AlertWithIconsData, AlertWithIconsSubHeading } from "@/Data/UiKits/Alert/AlertWithIconsData";
import { useState } from "react";
import { Clock } from "react-feather";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import CommonAlert from "../Common/CommonAlert";

const AlertWithIcons = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);

  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: "708px" }}>
        <CommonCardHeader subHeading={AlertWithIconsSubHeading} heading={AlertWithIcon} />
        <CardBody>
          <Alert className="alert-dismissible" color="primary dark" isOpen={Open} target="Alert-1">
            <Button close color="default" id="Alert-1" onClick={Toggle}></Button>
            {<Clock />}
            <p>
              <strong></strong>You can check in on some of those fields below.
            </p>
          </Alert>
          {AlertWithIconsData.map((data) => (
            <CommonAlert key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithIcons;
