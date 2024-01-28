import { Href, KnowledgeCategories, Knowledgefilter } from "@/Constant";
import { useState } from "react";
import { Button, Card, CardHeader, Col, Row } from "reactstrap";
import UpcomingCourse from "../UpcomingCourses";
import CollapseData from "./CollapseData";

const DetailedSidebar = () => {
  const [isProfile, setIsProfile] = useState(true);
  const [IsOpen, setIsOpen] = useState(false);
  return (
    <Col xl="3" className="xl-40">
      <div className="job-sidebar md-sidebar">
        <Button color="primary" className=" md-sidebar-toggle" href={Href} onClick={() => setIsOpen(!IsOpen)}>
          {Knowledgefilter}
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar custom-scrollbar ${IsOpen ? "open" : ""}`}>
          <div className="default-according style-1 job-accordion" id="accordionoc">
            <Row>
              <Col xl="12">
                <Card>
                  <CardHeader>
                    <h5 className="mb-0 p-0">
                      <Button color="link ps-0 " tag={"a"} className="ps-4" onClick={() => setIsProfile(!isProfile)} datatoggle="collapse" datatarget="#collapseicon5" ariaexpanded="true" ariacontrols="collapseicon5">
                        {KnowledgeCategories}
                      </Button>
                    </h5>
                  </CardHeader>
                  <CollapseData isProfile={isProfile} />
                </Card>
              </Col>
              <UpcomingCourse />
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default DetailedSidebar;
