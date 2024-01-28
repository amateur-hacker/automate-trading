import { Cancel, Print, PrintViews } from "@/Constant";
import { propsTypes } from "@/Type/Contacts";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button, Modal, ModalBody } from "reactstrap";

const PrintModal = ({ printModal, selectedUser, toggleCallback }: propsTypes) => {
  const printModalToggle = () => {
    toggleCallback(false);
  };

  const componentRef = useRef();
  return (
    <Modal isOpen={printModal} toggle={printModalToggle}>
      <div className="modal-header">
        <h5 className="modal-title">{PrintViews}</h5>
        <Button color="transprant" className="Button-close" onClick={printModalToggle} type="button"></Button>
      </div>
      <ModalBody className="list-persons">
        {/* <Printpreview selectedUser={selectedUser} /> */}
        <ReactToPrint
          trigger={() => (
            <Button color="secondary" className="me-1">
              {Print}
            </Button>
          )}
          content={() => componentRef?.current || null}
        />
        &nbsp;&nbsp;
        <Button color="primary" onClick={printModalToggle}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;
