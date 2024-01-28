import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Groups, ImagePath } from "@/Constant";
import { GroupCardData } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const GroupCard = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader heading={Groups} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="customers d-inline-block avatar-group">
              <ul className="simple-list flex-row">
                <li className="d-inline-block">
                  <Image height={70} width={70} className=" rounded-circle" src={`${ImagePath}/avtar/3.jpg`} alt="user" />
                </li>
                <li className="d-inline-block">
                  <Image height={70} width={70} className=" rounded-circle" src={`${ImagePath}/avtar/4.jpg`} alt="user" />
                </li>
                <li className="d-inline-block">
                  <Image height={70} width={70} className=" rounded-circle" src={`${ImagePath}/avtar/7.jpg`} alt="user" />
                </li>
              </ul>
            </div>
            {GroupCardData.map((item, i) => (
              <div key={i} className="customers d-inline-block avatar-group">
                <ul className="simple-list flex-row">
                  <li className="d-inline-block">
                    <Image height={item} width={item} className=" rounded-circle" src={`${ImagePath}/avtar/3.jpg`} alt="user" />
                  </li>
                  <li className="d-inline-block">
                    <Image height={item} width={item} className=" rounded-circle" src={`${ImagePath}/avtar/4.jpg`} alt="user" />
                  </li>
                  <li className="d-inline-block">
                    <Image height={item} width={item} className=" rounded-circle" src={`${ImagePath}/avtar/7.jpg`} alt="user" />
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupCard;
