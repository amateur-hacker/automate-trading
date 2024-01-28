import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LinksAndButtons } from "@/Constant";
import { DynamicLinkButtonData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const LinkAndButtonLists = () => {
  return (
    <Col sm="12" lg="6" xl="6">
      <Card>
        <CommonCardHeader heading={LinksAndButtons} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag={"a"} className=" active">
              Cras justo odio
            </ListGroupItem>
            {DynamicLinkButtonData.map((item, i) => (
              <ListGroupItem tag={"a"} key={i} className={`${item.disabled ? "disabled" : ""}`}>
                {item.text}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkAndButtonLists;
