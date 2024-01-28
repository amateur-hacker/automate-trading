import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import LeftSection from "@/Components/BonusUi/Tour/LeftSection";
import RightSection from "@/Components/BonusUi/Tour/RightSection";
import UserProfile from "@/Components/BonusUi/Tour/UserProfile";
import { Container, Row } from "reactstrap";

const UserProfiles = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="User Profile" parent="Users" />
      <Container fluid>
        <div className="user-profile tour">
          <Row>
            <UserProfile />
            <LeftSection />
            <RightSection />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default UserProfiles;
