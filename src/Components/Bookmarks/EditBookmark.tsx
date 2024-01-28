import { Cancel, Collection, Description, EditBookmark, General, Group, MyBookmarks, Save, Title, WebUrl } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { bookMarkType } from "@/Type/Bookmarks";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, FormGroup, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const EditBookmarkModal = () => {
  const { editRow, editModal } = useSelector((state: RootState) => state.BookMarkReducer);
  const dispatch = useDispatch();
  const editToggle = () => {
    dispatch({ type: "setEditModal", payload: !editModal });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const UpdateNewBookmark = (id: number, data: bookMarkType, image_url: string) => {
    dispatch({ type: "updateBookMark", payload: { id, data, image_url } });
  };
  const UpdateBookMark = (data: any) => {
    if (data !== "") {
      UpdateNewBookmark(editRow.id, data, "lightgallery/01.jpg");
      dispatch({ type: "setEditModal", payload: !editModal });
    }
  };

  return (
    <Modal isOpen={editModal} toggle={editToggle} size="lg">
      <ModalHeader toggle={editToggle}>{EditBookmark}</ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(UpdateBookMark)}>
          <div className="form-row">
            <Col md="12">
              <FormGroup>
                <Label>{WebUrl}</Label>
                <input className="form-control" type="text" defaultValue={editRow?.website_url} autoComplete="off" {...register("url", { required: true })} />
                <span style={{ color: "red" }}>{errors.url && "Url is not required"}</span>
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>{Title}</Label>
                <input className="form-control" type="text" defaultValue={editRow.title} autoComplete="off" {...register("title", { required: true })} />
                <span style={{ color: "red" }}>{errors.title && "Title is required"}</span>
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label>{Description}</Label>
                <input className="form-control" type="textarea" defaultValue={editRow.desc} autoComplete="off" {...register("desc", { required: true })} />
                <span style={{ color: "red" }}> {errors.desc && "Description is required"}</span>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-0">
                <Label>{Group}</Label>
                <select className="form-control digits" name="group">
                  <option value="bookmark">{MyBookmarks}</option>
                </select>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="mb-0">
                <Label>{Collection}</Label>
                <select className=" form-control digits" name="collection">
                  <option value="general">{General}</option>
                  <option value="fs">{"fs"}</option>
                </select>
              </FormGroup>
            </Col>
          </div>
          <Button color="primary" type="submit">
            {Save}
          </Button>
          &nbsp;&nbsp;
          <Button color="secondary" onClick={editToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default EditBookmarkModal;
