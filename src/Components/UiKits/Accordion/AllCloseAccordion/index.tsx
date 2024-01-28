import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AllCloseAccordion, CollapsibleGroupItem } from "@/Constant";
import { AccordionSubHeading, AccordionText, AllCloseData } from "@/Data/UiKits/Accordion";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Button, Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";

const AllCloseAccordions = () => {
  const [isOpen, setIsOpen] = useState<number | null>(0);
  const toggle = (id: number) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CommonCardHeader heading={AllCloseAccordion} subHeading={AccordionSubHeading} />
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <CardHeader>
                  <h5 className="mb-0">
                    <Button className="btn-link" color="default" onClick={() => toggle(1)}>
                      {CollapsibleGroupItem}
                      <span className="digits"> #1</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{AccordionText}</CardBody>
                </Collapse>
              </Card>
              {AllCloseData.map((item, i) => (
                <Card key={i}>
                  <CardHeader>
                    <h5 className="mb-0">
                      <Button className="btn-link" color="default" onClick={() => toggle(item)}>
                        {CollapsibleGroupItem}
                        <span className="digits"> #{item}</span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isOpen === item}>
                    <CardBody>{AccordionText}</CardBody>
                  </Collapse>
                </Card>
              ))}
            </div>
          </CardBody>
        </Card>
      </Accordion>
    </Col>
  );
};

export default AllCloseAccordions;
