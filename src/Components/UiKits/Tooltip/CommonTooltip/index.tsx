import { ToolTipProps } from "@/Type/UiKits";
import { useState } from "react";
import { Button, Tooltip } from "reactstrap";

const CommonTooltip = ({ item }: ToolTipProps) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <>
      <Button color="primary" id={"Tooltip-" + item.id}>
        {item.tooltip}
      </Button>
      <Tooltip placement={item.placement} isOpen={tooltip} target={"Tooltip-" + item.id} toggle={toggle}>
        {item.tooltip}
      </Tooltip>
    </>
  );
};

export default CommonTooltip;
