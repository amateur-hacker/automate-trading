import { ELANA, Href, ImagePath, MoreComments } from "@/Constant";
import { TimelineParagraph } from "@/Data/SocialApp";
import Image from "next/image";
import { MoreVertical } from "react-feather";
import { Card, CardBody, Col, Media } from "reactstrap";
import AddComments from "../Post1/AddComment";
import LikeAndShare from "../Post1/LikeAndShare";
import Comments2 from "./Comments2";

const Post2 = () => {
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
          <Image height={600} width={900} className="img-fluid" alt="user" src={`${ImagePath}/social-app/timeline-2.png`} />
          <div className="timeline-content">
            <p>{TimelineParagraph}</p>
            <LikeAndShare />
            <div className="social-chat">
              <div className="text-center">
                <a href={Href}>{MoreComments}</a>
              </div>
            </div>
            <Comments2 />
            <AddComments />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Post2;
