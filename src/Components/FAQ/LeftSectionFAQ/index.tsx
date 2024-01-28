import { FAQData, FAQQuestionsData } from "@/Data/FAQ/Faq";
import { Fragment, useState } from "react";
import { HelpCircle } from "react-feather";
import { Button, Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";

const LeftSectionFAQ = () => {
  const [isActivity, setIsActivity] = useState<boolean[]>([]);
  const handelChange = (e: number) => {
    let collapseCopy = [...isActivity];
    collapseCopy[e] = !collapseCopy[e];
    setIsActivity(collapseCopy);
  };

  return (
    <Col xl="8 " lg="6" md="7" className="xl-60 box-col-7">
      {FAQQuestionsData.map((item, i) => (
        <Fragment key={i}>
          <div className="faq-title">
            <h6>{item.subTitle}</h6>
          </div>
          {item.titles.map((item) => {
            return (
              <Card key={item.id}>
                <CardHeader>
                  <h5 className="mb-0">
                    <Button color="link" onClick={() => handelChange(item.id)} datatoggle="collapse" datatarget="#collapseicon14" ariaexpanded="true" ariacontrols="collapseicon14">
                      <HelpCircle />
                      {item.title}
                    </Button>
                  </h5>
                </CardHeader>
                <Collapse isOpen={isActivity[item.id]}>
                  <CardBody>
                    <p>{FAQData}</p>
                  </CardBody>
                </Collapse>
              </Card>
            );
          })}
        </Fragment>
      ))}
    </Col>
  );
};

export default LeftSectionFAQ;
