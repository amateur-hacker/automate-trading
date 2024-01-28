import { HTMLTooltipProps } from "@/Type/UiKits";
import { useState } from "react";
import { Button, Tooltip } from "reactstrap";

const HtmlContentTooltip = ({ item }: HTMLTooltipProps) => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <>
      <Button color="primary" id={"Tooltip-" + item.id} onClick={toggle}>
        {item.buttonText}
      </Button>
      <Tooltip placement={item.placement} isOpen={tooltip} target={"Tooltip-" + item.id}>
        {item.tooltip}
      </Tooltip>
    </>
  );
};

export default HtmlContentTooltip;
