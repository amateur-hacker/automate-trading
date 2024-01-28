import { ImagePath, Messages, MyPage, Notification } from "@/Constant";
import Image from "next/image";
import { Badge, Media } from "reactstrap";

const MyPageSection = () => {
  return (
    <Media>
      <Image height={50} width={50} className="img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/user/7.jpg`} alt="" />
      <Media body>
        <h5 className="font-primary f-w-600">{MyPage}</h5>
        <span className="d-block">
          <span>
            <i className="fa fa-comments-o"> </i>
            <span className="px-2">
              {Messages}
              <Badge color="light" className=" rounded-pill  ms-1">
                {"9"}
              </Badge>
            </span>
          </span>
        </span>
        <span className="d-block">
          <span>
            <i className="fa fa-bell-o"></i>
            <span className="px-2">
              {Notification}
              <Badge color="light" className=" rounded-pill ms-1">
                {"9"}
              </Badge>
            </span>
          </span>
        </span>
      </Media>
    </Media>
  );
};

export default MyPageSection;
