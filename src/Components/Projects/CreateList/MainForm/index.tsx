import { Add, Cancel, ClientName, EndingDate, EnterSomeDetails, Priority, ProjectRate, ProjectSize, ProjectTitle, ProjectType, StartingDate } from "@/Constant";
import { addProjectList } from "@/Redux/Slices/ProjectSlice";
import { registerType } from "@/Type/Projects";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, Col, Form, Label, Row } from "reactstrap";
import Dates from "./Dates";
import DropItem from "./DropItem";
import Dropdowns from "./Dropdowns";
import ProjectDetails from "./ProjectDetails";
import Title from "./Title";
import { useAppSelector } from "@/Redux/Hooks";

const MainForm = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<registerType>();
  const router = useRouter();
  const AddProject: SubmitHandler<registerType> = (data) => {
    dispatch(addProjectList({ ...data, customers_img1: "user/3.jpg", customers_img2: "user/5.jpg", customers_img3: "user/1.jpg", image: "user/3.jpg", sites: "Themeforest, australia", issue: <div className="font-secondary col-6">40</div>, resolved: <div className="font-secondary col-6">40</div>, comment: <div className="font-secondary col-6">20</div> }));
    router.push(`/${i18LangStatus}/project/projectlist`);
  };
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <Form className="theme-form projectcreate" onSubmit={handleSubmit(AddProject)}>
            <Row>
              <Title ProjectTitle={ProjectTitle} errors={errors} register={register} />
            </Row>
            <Row>
              <Title ClientName={ClientName} errors={errors} register={register} />
            </Row>
            <Row>
              <Col sm="4">
                <ProjectDetails errors={errors} register={register} ProjectRate={ProjectRate} />
              </Col>
              <Col sm="4">
                <ProjectDetails ProjectType={ProjectType} errors={errors} register={register} />
              </Col>
              <Dropdowns Priority={Priority} />
            </Row>
            <Row>
              <Dropdowns ProjectSize={ProjectSize} />
              <Col sm="4">
                <Dates StartingDate={StartingDate} />
              </Col>
              <Col sm="4">
                <Dates EndingDate={EndingDate} />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="mb-3">
                  <Label>{EnterSomeDetails}</Label>
                  <input className="form-control" type="textarea" style={{ height: "80px" }} {...register("description", { required: true })} />
                  <span style={{ color: "red" }}>{errors.description && "Some Details is required"}</span>
                </div>
              </Col>
            </Row>
            <DropItem />
            <Row>
              <Col className="text-end">
                <div className="mb-0">
                  <Button color="secondary" className="me-3">
                    {Add}
                  </Button>
                  <Button color="danger">{Cancel}</Button>
                </div>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MainForm;
