import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AlertWithIconInverse } from "@/Constant";
import { IconInverseData, IconInverseSubHeading } from "@/Data/UiKits/Alert/IconInverse";
import { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import CommonAlert from "../Common/CommonAlert";

const IconInverse = () => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal" style={{ minHeight: "708px" }}>
        <CommonCardHeader heading={AlertWithIconInverse} subHeading={IconInverseSubHeading} />
        <CardBody>
          <Alert className="alert-dismissible" color="primary inverse" isOpen={Open} target="Alert-1">
            <Button close color="default" id="Alert-1" onClick={Toggle}></Button>
            <i className="icon-timer"></i>
            <p>
              Your time Over after <b>5</b> minute
            </p>
          </Alert>
          {IconInverseData.map((data) => (
            <CommonAlert key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInverse;
