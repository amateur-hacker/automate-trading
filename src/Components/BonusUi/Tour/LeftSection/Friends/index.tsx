import { FriendsData } from "@/Data/BonusUi/Tour";
import Image from "next/image";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";

const Friends = () => {
  const [isShow, setIsShow] = useState(true);
  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Col xl="12" lg="6" md="12" sm="6">
      <Card>
        <CardHeader>
          <h5 className="p-0">
            <Button className="btn-link ps-0" color="transperant" onClick={toggleClick}>
              Friends
            </Button>
          </h5>
        </CardHeader>
        <div className={`collapse ${isShow && "show"}`} id="collapseicon13">
          <CardBody className="avatar-showcase filter-cards-view">
            {FriendsData.map((item, i) => (
              <div className="d-inline-block friend-pic" key={i}>
                <Image height={50} width={50} className="img-50 rounded-circle" src={`${item}`} alt="user" />
              </div>
            ))}
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default Friends;
