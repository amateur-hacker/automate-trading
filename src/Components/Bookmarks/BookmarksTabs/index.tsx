import { Newsletter, Notification, SharedWithMe } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { useSelector } from "react-redux";
import { TabContent } from "reactstrap";
import EditBookmarkModal from "../EditBookmark";
import CommonTabCard from "./CommonTabCard";
import DataLoopTab from "./DataLoopTab";
import FavDataTab from "./FavDataTab";
import MyBookmarkTab from "./MyBookmarkTab";

const BookmarksTabs = () => {
  const { activeTabss } = useSelector((state: RootState) => state.BookMarkReducer);

  return (
    <TabContent activeTab={activeTabss}>
      <DataLoopTab />
      <FavDataTab />
      <CommonTabCard tabId="3" tittle={SharedWithMe} />
      <MyBookmarkTab />
      <CommonTabCard tabId="5" tittle={Notification} />
      <CommonTabCard tabId="6" tittle={Newsletter} />
      <EditBookmarkModal />
    </TabContent>
  );
};
export default BookmarksTabs;
