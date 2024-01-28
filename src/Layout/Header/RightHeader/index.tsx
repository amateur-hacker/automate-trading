import { Col } from "reactstrap";
import Bookmark from "./Bookmark";
import Cart from "./Cart";
import DarkLight from "./DarkLight";
import Languages from "./Languages";
import MaximizeScreen from "./MaxMin";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";

const RightHeader = () => {
  return (
    <Col xs="10" sm="6" className="nav-right pull-right right-header p-0 dash-76">
      <ul className="simple-list flex-row nav-menus list-group">
        {/* <Languages /> */}
        <DarkLight />
        {/* <Cart /> */}
        {/* <Bookmark /> */}
        <Notifications />
        <MaximizeScreen />
        <UserProfile />
      </ul>
    </Col>
  );
};

export default RightHeader;
