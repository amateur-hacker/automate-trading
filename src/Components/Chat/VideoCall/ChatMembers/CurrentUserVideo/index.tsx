import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Media } from "reactstrap";

const CurrentUserVideo = () => {
  return (
    <Media>
      <Image height={50} width={50} src={`${ImagePath}/user/12.png`} className="rounded-circle user-image" alt=" " />
      <div className="about">
        <div className="name f-w-600">{`Johan Deo`}</div>
        <div className="status">{`Out is my favorite`}</div>
      </div>
    </Media>
  );
};

export default CurrentUserVideo;
