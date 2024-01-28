import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WithBadges } from "@/Constant";
import { badgeWithPillData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const WithBadgesLists = () => {
  return (
    <Col sm="12" lg="12" xl="12">
      <Card>
        <CommonCardHeader heading={WithBadges} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag={"li"} className="d-flex justify-content-between align-items-center">
              Cras justo odio<span className="badge badge-primary counter">14</span>
            </ListGroupItem>
            {badgeWithPillData.map((item, i) => (
              <ListGroupItem tag={"li"} key={i} className=" d-flex justify-content-between align-items-center">
                {item.heading}
                <span className={`badge ${item.spanClassName}`}>{item.spanText}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithBadgesLists;
