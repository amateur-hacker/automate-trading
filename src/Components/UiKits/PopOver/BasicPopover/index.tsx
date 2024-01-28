import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicExamples } from "@/Constant";
import { BasicPopoverData, PopoverSubHeading } from "@/Data/UiKits/Popover";
import { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import CommonPopover from "../CommonPopover/CommonPopover";

const Basic = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={BasicExamples} subHeading={PopoverSubHeading} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="example-popover" id="Popover-1">
            Click to toggle popover
          </Button>
          <Popover placement="right" isOpen={popover} target="Popover-1" toggle={Toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>And heres some amazing content. Its very engaging. Right?</PopoverBody>
          </Popover>
          {BasicPopoverData.map((popover) => {
            return <CommonPopover key={popover.id} item={popover} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Basic;
