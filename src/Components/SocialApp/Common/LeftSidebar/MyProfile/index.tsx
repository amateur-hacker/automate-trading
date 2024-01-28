import { ImagePath, MyProfile } from "@/Constant";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Media } from "reactstrap";
import ImageRow from "./ImageRow";
import LikeAndViewButton from "./LikeAndViewButton";
import MyPageSection from "./MyPage";

const MyProfileSection = () => {
  const [isProfile, setIsProfile] = useState(true);
  return (
    <>
      <Col xl="12">
        <Card>
          <CardHeader>
            <h5 className="mb-0">
              <Button color="link ps-0" onClick={() => setIsProfile(!isProfile)} datatoggle="collapse" datatarget="#collapseicon5" ariaexpanded="isProfile" ariacontrols="collapseicon5">
                {MyProfile}
              </Button>
            </h5>
          </CardHeader>
          <Collapse isOpen={isProfile}>
            <CardBody className="socialprofile filter-cards-view">
              <MyPageSection />
              <LikeAndViewButton />
              <ImageRow />
            </CardBody>
          </Collapse>
        </Card>
      </Col>
      <Col xl="12">
        <Card>
          <Media className="img-fluid" alt="" src={`${ImagePath}/social-app/timeline-3.png`} />
        </Card>
      </Col>
    </>
  );
};

export default MyProfileSection;
