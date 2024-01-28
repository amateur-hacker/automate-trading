import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlushStyle } from "@/Constant";
import { FlushStylesData } from "@/Data/UiKits/Lists";
import React from "react";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const FlushStyleLists = () => {
  return (
    <Col sm="12" lg="6" xl="6">
      <Card>
        <CommonCardHeader heading={FlushStyle} />
        <CardBody>
          <ListGroup className="list-group-flush">
            <ListGroupItem tag={"li"}>Cras justo odio</ListGroupItem>
            {FlushStylesData.map((item, i) => (
              <ListGroupItem tag={"li"} key={i}>
                {item}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlushStyleLists;
