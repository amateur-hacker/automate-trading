import { TabContentsProps } from "@/Type/SocialApp";
import { TabContent, TabPane } from "reactstrap";
import AboutTab from "../AboutTab";
import FriendsTab from "../FriendsTab";
import PhotosTab from "../PhotosTab";
import TimelineTab from "../TimelineTab";

const TabContents = ({ activeTab }: TabContentsProps) => {
  return (
    <TabContent activeTab={activeTab} className="tab-content">
      <TabPane tabId={"1"}>
        <TimelineTab />
      </TabPane>
      <TabPane tabId={"2"}>
        <AboutTab />
      </TabPane>
      <TabPane tabId={"3"}>
        <FriendsTab />
      </TabPane>
      <TabPane tabId={"4"}>
        <PhotosTab />
      </TabPane>
    </TabContent>
  );
};

export default TabContents;
