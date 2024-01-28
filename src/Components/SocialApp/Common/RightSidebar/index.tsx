import Follower from "./Followers";
import Followings from "./Following";
import Friends from "./Friends";
import LatestPhotos from "./LatestPhotos";
import ProfileIntroduction from "./ProfileIntro";

const RightSideBar = () => {
  return (
    <>
      <ProfileIntroduction />
      <Follower />
      <Followings />
      <LatestPhotos />
      <Friends />
    </>
  );
};

export default RightSideBar;
