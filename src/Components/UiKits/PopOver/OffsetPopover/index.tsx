import React, { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { OffsetToTooltip } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OffsetPopoverData, PopoverSubHeading } from "@/Data/UiKits/Popover";
import CommonPopover from "../CommonPopover/CommonPopover";

const Offset = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={OffsetToTooltip} subHeading={PopoverSubHeading} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="example-popover" id="Popover-12">
            20px 20px
          </Button>
          <Popover placement="top" isOpen={popover} target="Popover-12" offset={[20, 20]} toggle={Toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>Vivamus sagittis lacus vel augue laoreet rutrum faucibus.</PopoverBody>
          </Popover>
          {OffsetPopoverData.map((popover) => {
            return <CommonPopover key={popover.id} item={popover} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Offset;
