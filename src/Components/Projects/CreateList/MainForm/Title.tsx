import { TitlePropsType } from "@/Type/Projects";
import { Col, FormGroup, Label } from "reactstrap";

const Title = ({ ProjectTitle, ClientName, errors, register }: TitlePropsType) => {
  return (
    <>
      {ProjectTitle ? (
        <Col>
          <FormGroup className="mb-3">
            <Label>{ProjectTitle}</Label>
            <input className="form-control" type="text" placeholder="Project name *" {...register("title", { required: true })} />
            <span style={{ color: "red" }}>{errors.title && "Title is required"} </span>
          </FormGroup>
        </Col>
      ) : (
        <Col>
          <FormGroup>
            <Label>{ClientName}</Label>
            <input className="form-control" type="text" placeholder="Name client or company name" {...register("client_name", { required: true })} />
            <span style={{ color: "red" }}>{errors.client_name && "client_name is required"} </span>
          </FormGroup>
        </Col>
      )}
    </>
  );
};

export default Title;
