import { ImagePath, MARKJENCO, MARKJENCOEMAIL } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import { Media } from "reactstrap";

const ProfileHeader = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Media>
      <div className="media-size-email">
        <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="Image" height={50} width={50} />
      </div>
      <Media body>
        <h6 className="f-w-600">
          <Link href={`/${i18LangStatus}/user/user-profile`}>{MARKJENCO}</Link>
        </h6>
        <p>{MARKJENCOEMAIL}</p>
      </Media>
    </Media>
  );
};

export default ProfileHeader;
