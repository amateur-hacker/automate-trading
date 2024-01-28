import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultList, Href } from "@/Constant";
import { DefaultListData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DefaultLists = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={DefaultList} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag={"a"} href={Href}>
              Cras justo odio
            </ListGroupItem>
            {DefaultListData.map((item, i) => (
              <ListGroupItem tag={"a"} href={Href} key={i} >
                {item}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
