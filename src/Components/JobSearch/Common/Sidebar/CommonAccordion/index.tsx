import { CommonAccordionProps } from "@/Type/JobSearch";
import { useState } from "react";
import { MapPin, Search } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Input, Label } from "reactstrap";

const CommonAccordion = ({ accordionItems, index }: CommonAccordionProps) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <h5 className="mb-0 p-0">
            <Button className="btn-link" onClick={() => setIsOpen(!isOpen)} color="transperant" databstoggle="collapse" databstarget="#collapseicon" ariaexpanded="true" ariacontrols="collapseicon">
              {accordionItems.heading}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isOpen}>
          <CardBody className={`animate-chk location-checkbox  ${index == 0 ? "filter-cards-view" : ""}`}>
            {index == 0 && (
              <>
                <div className="job-filter mb-3">
                  <div className="faq-form">
                    <Input type="text" placeholder="Search.." />
                    <Search className="search-icon" />
                  </div>
                </div>
                <div className="job-filter">
                  <div className="faq-form">
                    <Input type="text" placeholder="location.." />
                    <MapPin className="search-icon" />
                  </div>
                </div>
              </>
            )}
            <div className="checkbox-animated">
              {accordionItems.data.map((element, i) => (
                <>
                  <Label className="d-block" for={element.id}>
                    <Input key={i} className="checkbox_animated" id={element.id} type="checkbox" /> {element.title}
                    {element.subTitle && <span className="d-block">{element.subTitle}</span>}
                  </Label>
                </>
              ))}
            </div>
            <Button className={`text-center ${index !== 0 ? "mt-4" : ""}`} color="primary" type="button">
              {accordionItems.buttonName}
            </Button>
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default CommonAccordion;
