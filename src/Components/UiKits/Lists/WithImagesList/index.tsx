import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, WithImages } from "@/Constant";
import { WithImagesListsData } from "@/Data/UiKits/Lists";
import Image from "next/image";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const WithImagesLists = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={WithImages} />
        <CardBody>
          <ListGroup>
            <ListGroupItem tag={"li"}>
              <Image height={40} width={40} src={`${ImagePath}/avtar/main.jpg`} alt="user" />
              Cras justo odio
            </ListGroupItem>
            {WithImagesListsData.map((item, i) => (
              <ListGroupItem tag={"li"} key={i} className={` ${item.liClass}`}>
                <Image height={40} width={40} src={`${ImagePath}/avtar/main.jpg`} alt="user" />
                {item.text}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImagesLists;
