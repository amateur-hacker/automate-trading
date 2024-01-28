import { ChatStatus, ImagePath, MarkJecno } from "@/Constant";
import Image from "next/image";
import { Media } from "reactstrap";

const CurrentUser = () => {
  return (
    <Media>
      <Image width={52} height={52} className="rounded-circle user-image" src={`${ImagePath}/user/12.png`} alt="user" />
      <div className="about">
        <div className="name f-w-600">{MarkJecno}</div>
        <div className="status">{ChatStatus}</div>
      </div>
    </Media>
  );
};

export default CurrentUser;
