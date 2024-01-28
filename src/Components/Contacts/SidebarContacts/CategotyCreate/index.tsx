import { AddCategory, Cancel, Save } from "@/Constant";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Modal, ModalBody, Row } from "reactstrap";

const CategoryCreate = () => {
  const [categoryModal, setCategoryModal] = useState(false);
  const categoryToggle = () => {
    setCategoryModal(!categoryModal);
  };

  return (
    <>
      <Button color="transparent" className=" btn-category" onClick={categoryToggle}>
        <span className="title"> + {AddCategory}</span>
      </Button>
      <Modal isOpen={categoryModal} toggle={categoryToggle}>
        <div className="modal-header">
          <h5 className="modal-title">{AddCategory}</h5>
          <Button color="transprant" className="btn-close" onClick={categoryToggle} type="button"></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark">
            <Row>
              <Col md="12">
                <FormGroup className="mb-3  my-0">
                  <Input type="text" required placeholder="Enter category name" autoComplete="off" />
                </FormGroup>
              </Col>
            </Row>
            <Button color="secondary" onClick={categoryToggle}>
              {Save}
            </Button>
            &nbsp;&nbsp;
            <Button color="primary" className="ms-1" onClick={categoryToggle}>
              {Cancel}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CategoryCreate;
