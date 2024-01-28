import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ContextualClasses } from "@/Constant";
import { ContextualClassData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ContexualLists = () => {
  return (
    <Col sm="12" lg="6" xl="6">
      <Card>
        <CommonCardHeader heading={ContextualClasses} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag={"li"}>Dapibus ac facilisis in</ListGroupItem>
            {ContextualClassData.map((item, i) => (
              <ListGroupItem tag={"li"} key={i} className={item.className}>
                {item.text}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContexualLists;
