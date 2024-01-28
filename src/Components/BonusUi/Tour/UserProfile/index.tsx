import { Href, ImagePath } from "@/Constant";
import { TourUseProfileIcon } from "@/Data/BonusUi/Tour";
import Image from "next/image";
import { Card, Col } from "reactstrap";

const UserProfile = () => {
  return (
    <Col sm="12">
      <Card className="profile-header bg-size" style={{ backgroundImage: `url(${ImagePath}/user-profile/bg-profile.jpg)`, backgroundRepeat: "center center", backgroundPosition: "cover" }}>
        <div className="profile-img-wrrap">
          <Image width={1000} height={300} className="img-fluid bg-img-cover" src={`${ImagePath}/user-profile/bg-profile.jpg`} alt="" />
        </div>
        <div className="userpro-box">
          <div className="img-wrraper">
            <div className="avatar">
              <Image width={600} height={300} className="step1" alt="" src={`${ImagePath}/user/7.jpg`} />
            </div>
            <div className="icon-wrapper">
              <i className="icofont icofont-pencil-alt-5 step2" data-intro="Change Profile image here"></i>
            </div>
          </div>
          <div className="user-designation">
            <div className="title">
              <a target="_blank" href={Href}>
                <h4>Emay Walter</h4>
                <h6>designer</h6>
              </a>
            </div>
            <div className="social-media step3" data-intro="This is your Social details">
              <ul className="user-list-social flex-row simple-list">
                {TourUseProfileIcon.map((item, i) => (
                  <li key={i}>
                    <a href={Href}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="follow">
              <ul className="follow-list flex-row simple-list">
                <li>
                  <div className="follow-num counter">325</div>
                  <span>Follower</span>
                </li>
                <li>
                  <div className="follow-num counter">450</div>
                  <span>Following</span>
                </li>
                <li>
                  <div className="follow-num counter">500</div>
                  <span>Likes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default UserProfile;
