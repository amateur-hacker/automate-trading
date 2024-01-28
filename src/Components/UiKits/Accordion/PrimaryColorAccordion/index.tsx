import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CollapsibleGroupItem, ColorAccordion } from "@/Constant";
import { AccordionText, ColorAccordionSubHeading, PrimaryColorAccordionData } from "@/Data/UiKits/Accordion";
import { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Col,Button, Card, CardBody, CardHeader, Collapse } from "reactstrap";

const PrimaryColorAccordion = () => {
  const [isOpen, setIsOpen] = useState<number | null>(1);
  const toggle = (id: number) => (isOpen === id ? setIsOpen(null) : setIsOpen(id));
  return (
    <Col sm="12" xl="6">
      <Accordion defaultActiveKey="0">
        <Card>
          <CommonCardHeader heading={ColorAccordion} subHeading={ColorAccordionSubHeading} />
          <CardBody>
            <div className="default-according" id="accordion">
              <Card>
                <CardHeader className="bg-primary">
                  <h5 className="mb-0">
                    <Button className="btn-link text-white" color="default" onClick={() => toggle(1)}>
                      {CollapsibleGroupItem}
                      <span className="digits"> #1</span>
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isOpen === 1}>
                  <CardBody>{AccordionText}</CardBody>
                </Collapse>
              </Card>
              {PrimaryColorAccordionData.map((element, index) => (
                <Card key={index}>
                  <CardHeader className="bg-primary">
                    <h5 className="mb-0">
                      <Button className="btn-link text-white" color="default" onClick={() => toggle(element)}>
                        {CollapsibleGroupItem}
                        <span className="digits"> #{element}</span>
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse isOpen={isOpen === element}>
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

export default PrimaryColorAccordion;
