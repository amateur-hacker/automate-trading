import React, { Fragment, useState } from "react";
import { Button, Tooltip } from "reactstrap";
import { Href, Modal, TooltipsAndPopovers } from "@/Constant";
import CommonModal from "@/CommonComponents/CommonModal";

const TooltipModal = () => {
  const [toolTipPopover, setToolTipPopover] = useState(false);
  const ToolTipPopoverModalToggle = () => setToolTipPopover(!toolTipPopover);
  const [tooltipBtn, setTooltipBtn] = useState(false);
  const toggleBtn = () => setTooltipBtn(!tooltipBtn);
  const [tooltipLink, setTooltipLink] = useState(false);
  const toggleLink = () => setTooltipLink(!tooltipLink);
  return (
    <Fragment>
      <Button color="primary" onClick={ToolTipPopoverModalToggle}>
        {TooltipsAndPopovers}
      </Button>
      <CommonModal isOpen={toolTipPopover} title={Modal} toggler={ToolTipPopoverModalToggle}>
        <h5>{"Popover in a modal"}</h5>
        <p>
          {"This"}{" "}
          <Button  color='primary'className=" popover-test" id="TooltipButtonExample">
            {"button"}
          </Button>{" "}
          {"triggers a popover on click."}
        </p>
        <Tooltip placement="right" isOpen={tooltipBtn} target="TooltipButtonExample" toggle={toggleBtn}>
          This is button
        </Tooltip>
        <hr />
        <h5>{"Tooltips in a modal"}</h5>
        <p>
          <a className="tooltip-test" href={Href} id="TooltipLinkExample">
            {"that link"}
          </a>{" "}
          {"have tooltips on hover."}
        </p>
        <Tooltip placement="right" isOpen={tooltipLink} target="TooltipLinkExample" toggle={toggleLink}>
          This is Link
        </Tooltip>
      </CommonModal>
    </Fragment>
  );
};

export default TooltipModal;
