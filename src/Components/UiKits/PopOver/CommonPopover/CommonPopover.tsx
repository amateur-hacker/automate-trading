import { CommonPopover } from "@/Type/UiKits";
import React, { useState } from "react";
import { Button, Popover, PopoverBody, PopoverHeader } from "reactstrap";

const CommonPopover = ({ item }: CommonPopover) => {
  const [popover, setPopover] = useState(false);
  const Toggle = () => setPopover(!popover);
  return (
    <>
      <Button color={item.buttonColor} className="example-popover" id={`${"Popover-" + item.id}`}>
        {item.buttonText}
      </Button>
      <Popover placement={item.placement} isOpen={popover} target={"Popover-" + item.id} toggle={Toggle} offset={item.offset} trigger={item.trigger}>
        <PopoverHeader>{item.popoverHeader}</PopoverHeader>
        <PopoverBody>{item.popoverBody}</PopoverBody>
      </Popover>
    </>
  );
};

export default CommonPopover;
