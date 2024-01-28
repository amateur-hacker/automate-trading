import { Card, Col, CardBody, Button } from "reactstrap";
import { AddFriend, ImagePath } from "@/Constant";
import Image from "next/image";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PeopleYouMayKnowData } from "@/Data/SocialApp";
import { PeopleYouMayKnowProps } from "@/Type/SocialApp";

const PeopleYouMayKnow = ({ heading }: PeopleYouMayKnowProps) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={heading} />
        <CardBody className="avatar-showcase">
          <div className="pepole-knows">
            <ul className=" flex-row flex-wrap">
              {PeopleYouMayKnowData.map((item, i) => (
                <li key={i}>
                  <div className="add-friend text-center">
                    <Image height={30} width={40} className="img-60 img-fluid rounded-circle" alt="user" src={`${ImagePath}/user/${item.peopleImageName}`} />
                    <span className="d-block f-w-600">{item.peopleName}</span>
                    <Button color="primary" size="xs">
                      {AddFriend}
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PeopleYouMayKnow;
