import { OffsetTooltipProps } from "@/Type/UiKits";
import { useState } from "react";
import { Button, Tooltip } from "reactstrap";

const OffsetTooltip = ({ item }: OffsetTooltipProps) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  const tooltips = (
    <>
      {"Tooltip"} <b>with</b> <code>HTML</code>
    </>
  );
  return (
    <>
      <Button color="primary" id={"Tooltip-" + item.id} onClick={toggle}>
        {item.buttonText}
      </Button>
      <Tooltip placement="top" isOpen={tooltip} target={"Tooltip-" + item.id} toggle={toggle} offset={item.offset}>
        {tooltips}
      </Tooltip>
    </>
  );
};

export default OffsetTooltip;
