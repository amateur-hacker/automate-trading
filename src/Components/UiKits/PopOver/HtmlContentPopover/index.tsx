import React, { useState } from "react";
import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { HTMLContent } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HtmlContentsData, PopoverSubHeading } from "@/Data/UiKits/Popover";
import CommonPopover from "../CommonPopover/CommonPopover";

const HtmlContents = () => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  const popoverBody = (
    <>
      {"Just add"} <code>{"data-html='true'"}</code>
      {"attribute and you can purse"}
      <span style={{ marginLeft: "3px", marginRight: "3px" }}>
        <b>{"html"}</b>
      </span>
      {"code"}
    </>
  );

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader subHeading={PopoverSubHeading} heading={HTMLContent} />
        <CardBody className="btn-showcase">
          <Button color="primary" className="example-popover" id="Popover-8">
            Popover on top
          </Button>
          <Popover placement="top" isOpen={popover} target="Popover-8" toggle={Toggle}>
            <PopoverHeader>Popover title</PopoverHeader>
            <PopoverBody>{popoverBody}</PopoverBody>
          </Popover>
          {HtmlContentsData.map((popover) => {
            return <CommonPopover key={popover.id} item={popover} />;
          })}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlContents;
