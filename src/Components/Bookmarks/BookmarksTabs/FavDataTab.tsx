import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { Favourites } from "@/Constant";
import ViewBookmark from "../ViewBookmarks";
import { useSelector } from "react-redux";
import FavDataLoop from "./FavDataLoop";
import { RootState } from "@/Redux/ReduxStore";

const FavDataTab = () => {
  const { gridView } = useSelector((state: RootState) => state.BookMarkReducer);
  return (
    <TabPane tabId="2">
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h6 className="mb-0">{Favourites}</h6>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <div
            className={`details-bookmark text-center ${
              gridView ? "" : "list-bookmark"
            }`}
          >
            <FavDataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default FavDataTab;
