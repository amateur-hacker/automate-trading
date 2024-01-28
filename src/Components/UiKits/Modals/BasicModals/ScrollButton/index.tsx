import CommonModal from "@/CommonComponents/CommonModal";
import {  Modal, ScrollingLongContent } from "@/Constant";
import {  ScrollButtonData } from "@/Data/UiKits/Modal";
import React, { Fragment, useState } from "react";
import { Button } from "reactstrap";

const ScrollBtn = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const ScrollModalToggle = () => setScrollingModal(!scrollingModal);
  return (
    <Fragment>
      <Button color="primary" onClick={ScrollModalToggle}>
        {ScrollingLongContent}
      </Button>
      <CommonModal isOpen={scrollingModal} title={Modal} toggler={ScrollModalToggle}>
        {ScrollButtonData.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
      </CommonModal>
    </Fragment>
  );
};

export default ScrollBtn;
