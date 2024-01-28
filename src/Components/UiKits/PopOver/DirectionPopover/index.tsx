import React, { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { Direction } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DirectionData, PopoverSubHeading } from "@/Data/UiKits/Popover";
import CommonPopover from "../CommonPopover/CommonPopover";

const Directions = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Direction} subHeading={PopoverSubHeading} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="example-popover" id="Popover-4">
            Popover on top
          </Button>
          <Popover placement="top" isOpen={popover} target="Popover-4" toggle={Toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
          </Popover>
          {DirectionData.map((popover) => {
            return <CommonPopover key={popover.id} item={popover} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Directions;
