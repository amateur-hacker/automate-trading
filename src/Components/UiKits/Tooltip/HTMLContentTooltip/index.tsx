import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import HtmlContentTooltip from "./HtmlContentTooltip";
import { HTMLElements } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import {  ToolTipHtmlData } from "@/Data/UiKits/Tooltip";

const HtmlElement = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const tooltips = (
    <>
      {"Tooltip"} <b>with</b> <code>HTML</code>
    </>
  );

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={HTMLElements} />
        <CardBody className="btn-showcase">
          <Button color="primary" id="Tooltip-5" onClick={toggle}>
            Click me
          </Button>
          <Tooltip placement="top" isOpen={tooltip} target="Tooltip-5">
            {tooltips}
          </Tooltip>
          {ToolTipHtmlData.map((item) => (
            <HtmlContentTooltip key={item.id} item={item} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default HtmlElement;
