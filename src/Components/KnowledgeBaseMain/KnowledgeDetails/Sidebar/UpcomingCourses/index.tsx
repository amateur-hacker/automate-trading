import { CourseBy, Href, UpcomingCourses } from "@/Constant";
import { LearningStarRatingData, UpcomingCourseData } from "@/Data/Learning";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Media } from "reactstrap";

const UpcomingCourse = () => {
  const [isDevelopment, setIsDevelopment] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button className=" btn-link" onClick={() => setIsDevelopment(!isDevelopment)} color="transperant" datastoggle="collapse" databstarget="#collapseicon" ariaexpanded="true" ariacontrols="collapseicon">
              {UpcomingCourses}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isDevelopment}>
          <CardBody className="upcoming-course">
            {UpcomingCourseData.map((item, i) => (
              <Media key={i}>
                <Media body>
                  <span className="f-w-600">{item.title}</span>
                  <span className="d-block">
                    {CourseBy}
                    <a href={Href}> Lorem ipsum</a>
                  </span>
                  {LearningStarRatingData}
                </Media>
                <div>
                  <h5 className="mb-0 font-primary">{item.day}</h5>
                  <span className="d-block">{item.month}</span>
                </div>
              </Media>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default UpcomingCourse;
