import { RootState } from "@/Redux/ReduxStore";
import { useSelector } from "react-redux";
import { Row } from "reactstrap";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
const Header = () => {
  const sideBarToggle = useSelector((store: RootState) => store.headerSlice.sidebarToggle);
  return (
    <div className={`page-header ${sideBarToggle}`} id="page-header">
      <Row className="header-wrapper m-0">
        <LeftHeader />
        <RightHeader />
      </Row>
    </div>
  );
};

export default Header;
