import ActivityFeedSection from "./ActivityFeed";
import MutualFriend from "./MutualFriends";
import MyProfileSection from "./MyProfile";

const LeftBar = () => {
  return (
    <>
      <MyProfileSection />
      <MutualFriend />
      <ActivityFeedSection />
    </>
  );
};

export default LeftBar;
