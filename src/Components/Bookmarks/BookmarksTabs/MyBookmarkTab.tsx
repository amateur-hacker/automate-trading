import { MyBookmark } from "@/Constant";
import { useSelector } from "react-redux";
import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import ViewBookmark from "../ViewBookmarks";
import DataLoop from "./DataLoop";
import { RootState } from "@/Redux/ReduxStore";

const MyBookmarkTab = () => {
  const { gridView } = useSelector((state: RootState) => state.BookMarkReducer);
  return (
    <TabPane tabId="4">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h6 className="mb-0">{MyBookmark}</h6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default MyBookmarkTab;
