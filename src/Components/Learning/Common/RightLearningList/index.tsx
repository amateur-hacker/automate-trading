import { Href } from "@/Constant";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import CategoriesLearning from "./Categories";
import FindCourses from "./FindCourse";
import UpcomingCourse from "./UpcomingCourses";

const RightLearning = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Col xl="3">
      <div className="job-sidebar md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" href={Href} onClick={onClickHandle}>
          Learning Filter
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
            <Row>
              <FindCourses />
              <CategoriesLearning />
              <UpcomingCourse />
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default RightLearning;
