import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge, Media } from "reactstrap";

const Activity2 = () => {
  const {i18LangStatus} = useAppSelector((store)=> store.langSlice)
  const router = useRouter();
  return (
    <tr>
      <td>
        <Media>
          <div className="square-box me-2">
            <Image height={50} width={50} className="img-fluid b-r-5" src={`${ImagePath}/avtar/teenager.png`} alt="" />
          </div>
          <Media body>
            <h5 style={{ cursor: "pointer" }} onClick={() => router.push(`/${i18LangStatus}/user/userprofile`)}>
              Lena Burton added new
            </h5>
            <p>
              Comment on
              <span className="font-primary"> Vegetarian food fest</span>
            </p>
            <div className="activity-msg">
              <span className="activity-msg-box">Again this was our mistake, we are truly sorry for not adhering to a strictly non animal product event.</span>
            </div>
          </Media>
        </Media>
      </td>
      <td>
        <Badge color="light" className="font-theme-light">
          10 jul 2023
        </Badge>
      </td>
    </tr>
  );
};
export default Activity2;
