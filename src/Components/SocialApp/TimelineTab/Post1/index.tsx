import { ELANA, ImagePath } from "@/Constant";
import { TimelineParagraph } from "@/Data/SocialApp";
import Image from "next/image";
import { MoreVertical } from "react-feather";
import { Card, CardBody, Col, Media } from "reactstrap";
import AddComments from "./AddComment";
import SocialChat from "./Comments";
import LikeAndShare from "./LikeAndShare";

const Post1 = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <div className="new-users-social">
            <Media>
              <Image height={50} width={50} className="rounded-circle image-radius m-r-15" src={`${ImagePath}/user/1.jpg`} alt="user" />
              <Media body>
                <h6 className="mb-0 f-w-700">{ELANA}</h6>
                <p>January, 12,2023</p>
              </Media>
              <span className="pull-right mt-0">
                <MoreVertical />
              </span>
            </Media>
          </div>
          <Image height={500} width={900} className="img-fluid" alt="timeline" src={`${ImagePath}/social-app/timeline-1.png`} />
          <div className="timeline-content">
            <p>{TimelineParagraph}</p>
            <LikeAndShare />
            <SocialChat />
            <AddComments />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Post1;
