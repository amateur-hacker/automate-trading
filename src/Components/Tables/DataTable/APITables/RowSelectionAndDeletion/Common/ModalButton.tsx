import React, { Fragment, useState } from "react";
import { NewMessage } from "@/Constant";
import FormModal from "./FormModal";
import { Button } from "reactstrap";
import { ModalButtonType } from "@/Type/UiKits";

const ModalButton = ({ btnText, defaultVal }: ModalButtonType) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Button color="primary" onClick={toggle} className="mb-4">
        {btnText}
      </Button>
      <FormModal
        modal={modal}
        NewMessage={NewMessage}
        toggle={toggle}
        defaultVal={defaultVal}
      />
    </Fragment>
  );
};

export default ModalButton;
