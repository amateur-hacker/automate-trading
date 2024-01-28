import { TabContent, TabPane } from "reactstrap";
import PeopleList from "./PeopleList";
import PeopleStatus from "./Status";
import UserProfile from "./UserProfile";
import { ChatMenuTabContentProps } from "@/Type/ChatApp";

const ChatMenuTabContent = ({ activeTab }: ChatMenuTabContentProps) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <PeopleList />
      </TabPane>
      <TabPane tabId={2}>
        <PeopleStatus />
      </TabPane>
      <TabPane tabId={3}>
        <UserProfile />
      </TabPane>
    </TabContent>
  );
};

export default ChatMenuTabContent;
