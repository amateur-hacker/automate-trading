import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AccordionWithIconOnTitle, CollapsibleGroupItem } from "@/Constant";
import { IconAccordionSubHeading, WithIconAccordionData, WithIconAccordionText } from "@/Data/UiKits/Accordion";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Button, Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";

const WithIconAccordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(1);
  const toggle = (id: number) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CommonCardHeader heading={AccordionWithIconOnTitle} subHeading={IconAccordionSubHeading} />
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <CardHeader className="bg-primary">
                  <h5 className="mb-0">
                    <Button className="btn-link text-white" color="default" onClick={() => toggle(1)}>
                      <i className="icofont icofont-briefcase-alt-2"></i>
                      {CollapsibleGroupItem}
                      <span className="digits"> #1</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{WithIconAccordionText}</CardBody>
                </Collapse>
              </Card>
              {WithIconAccordionData.map((element, index) => (
                <Card key={index}>
                  <CardHeader className="bg-primary">
                    <h5 className="mb-0">
                      <Button className="btn-link text-white" color="default" onClick={() => toggle(element.id)}>
                        <i className={`icofont ${element.icon}`}></i> {CollapsibleGroupItem}
                        <span className="digits"> #{element.id}</span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isOpen === element.id}>
                    <CardBody>{WithIconAccordionText}</CardBody>
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

export default WithIconAccordion;
