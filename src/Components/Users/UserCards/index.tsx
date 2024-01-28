import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import SocialMediaIcons from "@/Components/SocialApp/Common/SocialmediaIcons";
import { ImagePath } from "@/Constant";
import { UsersCardData } from "@/Data/Users";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardHeader, Col, Container, Row } from "reactstrap";
import UserProfileFooter from "./UserProfileFooter";
import { useAppSelector } from "@/Redux/Hooks";

const UserCards = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <>
      <CommonBreadcrumb pageTitle="Users Card" parent="Users" />
      <Container fluid className="user-card">
        <Row>
          {UsersCardData.map((item, i) => (
            <Col md="6" xl="4" lg="6" className="box-col-6" key={i}>
              <Card className="custom-card">
                <CardHeader className="p-0">
                  <Image height={300} width={600} src={`${ImagePath}/${item.card_bg}`} className="img-fluid" alt="user" />
                </CardHeader>
                <div className="card-profile">
                  <Image height={100} width={100} src={`${ImagePath}/${item.avatar}`} className="rounded-circle mx-auto" alt="user" />
                </div>
                <SocialMediaIcons listClassName="card-social" />
                <div onClick={() => router.push(`/${i18LangStatus}/user/userprofile`)} className="text-center profile-details">
                  <h4 style={{ cursor: "pointer" }}>{item.name}</h4>
                  <h6>{item.post}</h6>
                </div>
                <UserProfileFooter item={item} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default UserCards;
