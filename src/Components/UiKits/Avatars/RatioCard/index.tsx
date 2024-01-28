import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, Ratio } from "@/Constant";
import { RatioCardData } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const RatioCard = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader heading={Ratio} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="avatar">
                <Image height={100} width={100} className="b-r-8" src={`${ImagePath}/avtar/3.jpg`} alt="user" />
              </div>
              {RatioCardData.map((item, i) => (
                <div key={i} className="avatar">
                  <Image height={item.size} width={item.size} className={item.className} src={`${ImagePath}/avtar/3.jpg`} alt="user" />
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RatioCard;
