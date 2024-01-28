import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Card, Col } from "reactstrap";
import PostHeader from "../../Common/PostHeader";
import PostReact from "../../Common/PostReact";
import SocialIcon from "../../Common/SocialIcons";

const PostFirst = () => {
  return (
    <Col sm="12" data-intro="This is the your first Post" className="step5">
      <Card>
        <div className="profile-post">
          <PostHeader heading="22 Hours ago" />
          <div className="post-body">
            <div className="img-container">
              <div className="my-gallery" id="aniimated-thumbnials">
                <Image height={300} width={1000} itemProp="thumbnail" className="img-fluid rounded media" src={`${ImagePath}/user-profile/post1.jpg`} alt="gallery" />
              </div>
            </div>
            <br />
            <PostReact h6={"+5 people react this post"} />
            <SocialIcon />
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default PostFirst;
