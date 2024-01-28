import { CreatedByMe } from "@/Constant";
import { useSelector } from "react-redux";
import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import ViewBookmark from "../ViewBookmarks";
import DataLoop from "./DataLoop";
import { RootState } from "@/Redux/ReduxStore";

const DataLoopTab = () => {
  const { gridView } = useSelector((state: RootState) => state.BookMarkReducer);
  return (
    <TabPane tabId="1">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h6 className="mb-0">{CreatedByMe}</h6>
          <ViewBookmark />
        </CardHeader>
        <CardBody className="pb-0">
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default DataLoopTab;
