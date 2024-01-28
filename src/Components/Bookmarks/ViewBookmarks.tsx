import { Href } from "@/Constant";
import { Grid, List } from "react-feather";
import { useDispatch } from "react-redux";

const ViewBookmark = () => {
  const dispatch = useDispatch();
  const GridBookmark = () => {
    dispatch({ type: "setGridView", payload: true });
  };
  const ListBookmark = () => {
    dispatch({ type: "setGridView", payload: false });
  };
  return (
    <ul className="simple-list flex-row">
      <li>
        <a className="grid-bookmark-view" href={Href}>
          <Grid onClick={GridBookmark} />
        </a>
      </li>
      &nbsp;
      <li>
        <a className="list-layout-view" href={Href}>
          <List onClick={ListBookmark} />
        </a>
      </li>
    </ul>
  );
};
export default ViewBookmark;
