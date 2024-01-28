import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, StatusIndicator } from "@/Constant";
import { StatusIndicatorData } from "@/Data/UiKits/Avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const StatusIndicatorCard = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader heading={StatusIndicator} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="avatar">
                <Image height={100} width={100} className="rounded-circle" src={`${ImagePath}/avtar/7.jpg`} alt="user" />
                <div className="status status-100 bg-success"> </div>
              </div>
              {StatusIndicatorData.map((item, i) => (
                <div key={i} className="avatar">
                  <Image height={item.size} width={item.size} className="rounded-circle" src={`${ImagePath}/avtar/7.jpg`} alt="user" />
                  <div className={item.className}> </div>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorCard;
