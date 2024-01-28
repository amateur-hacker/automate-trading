import { Href } from "@/Constant";
import { CommonAccordionData } from "@/Data/JobSearch";
import { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import CommonAccordion from "./CommonAccordion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onHandelClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Col xl="3 " className="box-col-5 xl-40">
      <div className="job-sidebar md-sidebar">
        <Button color="primary" className="job-toggle" href={Href} onClick={onHandelClick}>
          Job Filter
        </Button>
        <div className={`job-left-aside custom-scrollbar ${isOpen ? "open" : ""} `}>
          <div className="default-according style-1 faq-accordion job-accordion" id="accordionoc">
            <Row>
              {CommonAccordionData.map((accordionItems, index) => (
                <CommonAccordion key={index} accordionItems={accordionItems} index={index} />
              ))}
            </Row>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Sidebar;
