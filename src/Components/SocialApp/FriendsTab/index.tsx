import { ImagePath } from "@/Constant";
import { FriendsCardData } from "@/Data/SocialApp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardHeader, Col, Row } from "reactstrap";
import SocialMediaIcons from "../Common/SocialmediaIcons";
import AllCardFooter from "./CardFooter";
import { useAppSelector } from "@/Redux/Hooks";

const FriendsTab = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <>
      <Row>
        {FriendsCardData.map((item, i) => (
          <Col md="6" xl="4" lg="6" className="box-col-6" key={i}>
            <Card className="custom-card">
              <CardHeader className="p-0">
                <Image height={300} width={700} src={`${ImagePath}/${item.card_bg}`} className="img-fluid" alt="user" />
              </CardHeader>
              <div className="card-profile">
                <Image height={100} width={100} src={`${ImagePath}/${item.avatar}`} className="rounded-circle mx-auto" alt="user" />
              </div>
              <SocialMediaIcons listClassName="card-social" />
              <div onClick={() => router.push(`/${i18LangStatus}/user/userprofile`)} className="text-center profile-details">
                <h4 style={{ cursor: "pointer" }}>{item.name}</h4>
                <h6>{item.post}</h6>
              </div>
              <AllCardFooter item={item} />
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default FriendsTab;
