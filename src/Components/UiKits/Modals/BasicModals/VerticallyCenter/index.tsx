import React, { Fragment, useState } from "react";
import { Button } from "reactstrap";
import {  Modal, VerticallyCentered } from "@/Constant";
import CommonModal from "@/CommonComponents/CommonModal";

const VerticalBtn = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Button color="primary" onClick={toggle}>
        {VerticallyCentered}
      </Button>
      <CommonModal isOpen={modal} title={Modal} toggler={toggle}>
        <p>{"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}</p>
      </CommonModal>
    </Fragment>
  );
};

export default VerticalBtn;
