import { ActivityFeed, Href, ImagePath } from "@/Constant";
import { ActivityFeedData } from "@/Data/SocialApp";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Media } from "reactstrap";

const ActivityFeedSection = () => {
  const [isActivity, setIsActivity] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <CardHeader>
          <h5 className="mb-0">
            <Button color="link ps-0" onClick={() => setIsActivity(!isActivity)} datatoggle="collapse" datatarget="#collapseicon14" ariaexpanded="isActivity" ariacontrols="collapseicon14">
              {ActivityFeed}
            </Button>
          </h5>
        </CardHeader>
        <Collapse isOpen={isActivity}>
          <CardBody className="social-status filter-cards-view">
            {ActivityFeedData.map((item) => (
              <Media key={item.id}>
                <Image height={50} width={40} className="img-50 rounded-circle m-r-15" src={`${ImagePath}/user/${item.image}`} alt="" />
                <Media body>
                  <span className="f-w-600 d-block">{item.title}</span>
                  <p>
                    {item.desc} <a href={Href}>{"Photo"}</a>
                  </p>
                  <span className="light-span">{item.time}</span>
                </Media>
              </Media>
            ))}
          </CardBody>
        </Collapse>
      </Card>
    </Col>
  );
};

export default ActivityFeedSection;
