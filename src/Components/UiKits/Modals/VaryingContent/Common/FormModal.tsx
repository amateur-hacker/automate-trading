import React from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { FormModelType } from "@/Type/UiKits";
import CommonModal from "@/CommonComponents/CommonModal";

const FormModal = ({ modal, NewMessage, toggle, defaultVal }: FormModelType) => {
  return (
    <CommonModal isOpen={modal} title={NewMessage} toggler={toggle}>
      <Form>
        <FormGroup>
          <Label className="col-form-label" for="recipient-name">
            {"Recipient:"}
          </Label>
          <Input type="text" defaultValue={defaultVal} />
        </FormGroup>
        <FormGroup>
          <Label className="col-form-label" for="message-text">
            {"Message:"}
          </Label>
          <Input type="textarea" id="message-text" />
        </FormGroup>
      </Form>
    </CommonModal>
  );
};

export default FormModal;
