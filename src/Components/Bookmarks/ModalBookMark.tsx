import { AddBookmark, Cancel, Collection, Description, General, Group, MyBookmarks, Save, Title, WebUrl } from "@/Constant";
import { BookmarkModalProps } from "@/Type/Bookmarks";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Label, Modal, ModalBody } from "reactstrap";

const BookmarkModal = ({ addToggle, value }: BookmarkModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit1 = (data: any) => {
    if (data !== "") {
      dispatch({ type: "addNewBookmark", payload: { data, img_url: "lightgallery/01.jpg" } });
    }
  };
  return (
    <Modal isOpen={value} toggle={addToggle} size="lg" className="modal-bookmark">
      <div className="modal-header">
        <h5 className="modal-title">{AddBookmark}</h5>
        <Button color="transprant" close onClick={addToggle} type="button" />
      </div>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit1)}>
          <div className="form-row">
            <Col md="12">
              <FormGroup>
                <Label>{WebUrl}</Label>
                <input className="form-control" type="text" autoComplete="off" {...register("url", { required: true })} />
                <span style={{ color: "red" }}>{errors.url && "Url is required"}</span>
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>{Title}</Label>
                <input className="form-control" type="text" autoComplete="off" {...register("title", { required: true })} />
                <span style={{ color: "red" }}>{errors.title && "Title is required"}</span>
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>{Description}</Label>
                <input className="form-control" type="textarea" autoComplete="off" {...register("desc", { required: true })} />
                <span style={{ color: "red" }}>{errors.desc && "Description is required"}</span>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-0">
                <Label>{Group}</Label>
                <br />
                <select className="form-control digits" name="group">
                  <option value="bookmark">{MyBookmarks}</option>
                </select>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-0">
                <Label>{Collection}</Label>
                <br />
                <select className="form-control digits" name="collection">
                  <option value="general">{General}</option>
                  <option value="fs">{"fs"}</option>
                </select>
              </FormGroup>
            </Col>
          </div>
          <Button color="secondary" type="submit">
            {Save}
          </Button>
          &nbsp;&nbsp;
          <Button color="primary" onClick={addToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default BookmarkModal;
