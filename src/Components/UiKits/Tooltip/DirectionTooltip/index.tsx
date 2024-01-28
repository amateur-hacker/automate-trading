import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Direction } from "@/Constant";
import { ToolTipDirectionsData } from "@/Data/UiKits/Tooltip";
import { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonTooltip from "../CommonTooltip";

const Directions = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Direction} />
        <CardBody className="btn-showcase">
          <Button color="primary" id="Tooltip-1">
            Tooltip on top
          </Button>
          <Tooltip placement="top" isOpen={tooltip} target="Tooltip-1" toggle={toggle}>
            Tooltip on top
          </Tooltip>
          {ToolTipDirectionsData.map((item) => (
            <CommonTooltip key={item.id} item={item} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;
