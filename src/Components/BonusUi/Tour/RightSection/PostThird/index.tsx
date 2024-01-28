import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Card, Col } from "reactstrap";
import PostHeader from "../../Common/PostHeader";
import PostReact from "../../Common/PostReact";
import SocialIcon from "../../Common/SocialIcons";

const PostThird = () => {
  return (
    <Col sm="12">
      <Card>
        <div className="profile-post">
          <PostHeader heading="2 Hours ago" />
          <div className="post-body">
            <div className="img-container">
              <div className="my-gallery" id="aniimated-thumbnials">
                <Image height={300} width={1000} className="img-fluid rounded" src={`${ImagePath}/user/bg-profile.jpg`} itemProp="thumbnail" alt="gallery" />
              </div>
            </div>
            <br />
            <PostReact h6="+20 people react this post" />
            <SocialIcon />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default PostThird;
