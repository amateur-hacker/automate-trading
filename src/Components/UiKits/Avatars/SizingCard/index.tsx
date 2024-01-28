import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Sizing } from "@/Constant";
import { SizingCardData } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const SizingCard = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader heading={Sizing} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="avatar">
                <Image className="rounded-circle" height={100} width={100} src={`${ImagePath}/avtar/4.jpg`} alt="user" />
              </div>
              {SizingCardData.map((item, i) => (
                <div key={i} className="avatar">
                  <Image className="rounded-circle" height={item} width={item} src={`${ImagePath}/avtar/4.jpg`} alt="user" />
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizingCard;
