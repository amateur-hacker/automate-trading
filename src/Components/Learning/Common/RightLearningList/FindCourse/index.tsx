import { Filters, FindCourse } from "@/Constant";
import { useState } from "react";
import { Search } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Input } from "reactstrap";
import CheckBoxes from "./Checkboxes";

const FindCourses = () => {
  const [isFilter, setIsFilter] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button className=" btn-link ps-0" onClick={() => setIsFilter(!isFilter)} color="transperant" datastoggle="collapse" databstarget="#collapseicon" ariaexpanded="true" ariacontrols="collapseicon">
              {FindCourse}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isFilter}>
          <div className="collapse show" id="collapseicon" aria-labelledby="collapseicon" data-parent="#accordion">
            <CardBody className="filter-cards-view animate-chk">
              <div className="job-filter">
                <div className="faq-form">
                  <Input type="text" placeholder="Search.." />
                  <Search className="search-icon" />
                </div>
              </div>
              <CheckBoxes />
              <Button color="primary " className="text-center">
                {Filters}
              </Button>
            </CardBody>
          </div>
        </Collapse>
      </Card>
    </Col>
  );
};

export default FindCourses;
