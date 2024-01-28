import { Designer, Href, ImagePath } from "@/Constant";
import { SocialAppLogos, SocialAppTopFollowData } from "@/Data/SocialApp";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, Col } from "reactstrap";

const TopSocialApp = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <Col sm="12">
      <Card className="profile-header bg-image" style={{ backgroundImage: `url(${ImagePath}/user-profile/bg-profile.jpg)`, backgroundRepeat: "center center", backgroundPosition: "cover" }}>
        <div className="profile-img-wrrap">
          <Image height={100} width={100} style={{ backgroundSize: "cover", backgroundPosition: "center", display: "block" }} className="img-fluid bg-img-cover" src={`${ImagePath}/user-profile/bg-profile.jpg`} alt="" />
        </div>
        <div className="userpro-box">
          <div className="img-wrraper">
            <div className="avatar">
              <Image height={100} width={100} className="img-fluid" alt="" src={`${ImagePath}/user/7.jpg`} />
            </div>
            <div className="icon-wrapper" onClick={() => router.push(`/${i18LangStatus}/user/useredit`)}>
              <i className="icofont icofont-pencil-alt-5"></i>
            </div>
          </div>
          <div className="user-designation">
            <div className="title">
              <a target="_blank" href={Href}>
                <h4>Emay Walter</h4>
                <h6>{Designer}</h6>
              </a>
            </div>
            <div className="social-media">{SocialAppLogos}</div>
            <div className="follow">
              <ul className=" follow-list flex-row">
                {SocialAppTopFollowData.map((item, i) => (
                  <li key={i}>
                    <div className="follow-num counter">{item.number}</div>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};
export default TopSocialApp;
