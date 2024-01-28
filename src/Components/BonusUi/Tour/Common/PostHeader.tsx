import { ImagePath } from "@/Constant";
import { PostHeaderProps } from "@/Type/BonusUi";
import Image from "next/image";
import { Media } from "reactstrap";

const PostHeader = ({ heading }: PostHeaderProps) => {
  return (
    <>
      <div className="post-header">
        <Media>
          <Image height={50} width={50} className="img-thumbnail rounded-circle me-3" src={`${ImagePath}/user/7.jpg`} alt="Generic placeholder image" />
          <Media body className="align-self-center">
            <a href="social-app.html">
              <h5 className="user-name">Emay Walter</h5>
            </a>
            <h6>{heading}</h6>
          </Media>
        </Media>
        <div className="post-setting">
          <i className="fa fa-ellipsis-h"></i>
        </div>
      </div>
    </>
  );
};

export default PostHeader;
