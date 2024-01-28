import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, WithIcon } from "@/Constant";
import { WithIconsData } from "@/Data/UiKits/Lists";
import React from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const WithIconLists = () => {
  return (
    <Col sm="6" xl="12">
      <Card>
        <CommonCardHeader heading={WithIcon} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag={"a"} href={Href}>
              <i className="icon-save-alt me-2"></i>
              Cras justo odio
            </ListGroupItem>
            {WithIconsData.map((item, i) => (
              <ListGroupItem key={i} tag={"a"} href={Href} className={` ${item.liClass}`}>
                <>
                  {item.icon}
                  {item.text}
                </>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithIconLists;
