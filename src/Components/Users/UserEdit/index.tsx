import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import EditMyProfile from "./EditProfile";
import MyProfile from "./MyProfile";

const UserEdit = () => {
  return (
    <>
      <CommonBreadcrumb parent="Users" pageTitle="User Edit" />
      <Container fluid>
        <div className="edit-profile">
          <Row>
            <MyProfile />
            <EditMyProfile />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default UserEdit;
