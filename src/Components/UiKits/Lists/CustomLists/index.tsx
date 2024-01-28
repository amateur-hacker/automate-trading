import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomContent } from "@/Constant";
import { CustomContentsData } from "@/Data/UiKits/Lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const CustomLists = () => {
  return (
    <Col sm="12" lg="12" xl="12">
      <Card>
        <CommonCardHeader heading={CustomContent} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag={"div"} className=" list-group-item-action flex-column align-items-start active">
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">List group item heading</h5>
                <small>3 days ago</small>
              </div>
              <p className="mb-0 mt-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
              <small>Donec id elit non mi porta.</small>
            </ListGroupItem>
            {CustomContentsData.map((item, i) => (
              <ListGroupItem tag={"div"} key={i} className={item.liClass}>
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{item.heading}</h5>
                  <small>3 days ago</small>
                </div>
                <p className="mb-0 mt-1">{item.paragraphText}</p>
                <small className={item.smallClass}>Donec id elit non mi porta.</small>
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomLists;
