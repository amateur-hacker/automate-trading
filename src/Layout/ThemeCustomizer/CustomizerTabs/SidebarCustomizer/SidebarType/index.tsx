"use client";
import { useAppSelector } from "@/Redux/Hooks";
import { setSidebarWrapper } from "@/Redux/Slices/HeaderSlice";
import { useDispatch } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import CommonUL from "../../../Common/CommonUl";
import ConfigDB from "@/Config/ThemeConfig";

const SidebarType = () => {
  const dispatch = useDispatch();
  const SidebarWrapper = useAppSelector((store) => store.headerSlice.sidebarWrapper);
  const sidebarHorizontalToggler = () => {
    ConfigDB.data.settings.sidebar.type=SidebarWrapper === "compact-wrapper" ? "horizontal-wrapper" : 'horizontal-wrapper'
    dispatch(setSidebarWrapper(SidebarWrapper === "compact-wrapper" ? "horizontal-wrapper" : 'horizontal-wrapper'));
  };
  const sidebarCompactToggler = () => {
    ConfigDB.data.settings.sidebar.type=SidebarWrapper === "horizontal-wrapper" ? "compact-wrapper":  "compact-wrapper"
    dispatch(setSidebarWrapper(SidebarWrapper === "horizontal-wrapper" ? "compact-wrapper":  "compact-wrapper"));
  };
  return (
    <>
      <h6>Sidebar Type</h6>
      <ListGroup className="sidebar-type layout-grid">
        <ListGroupItem className="normal-sidebar" onClick={sidebarHorizontalToggler}>
          <div className="header bg-light">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup className="flex-row">
              <ListGroupItem className="bg-dark sidebar"></ListGroupItem>
              <ListGroupItem className="bg-light body"></ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>
        <ListGroupItem dataattr="compact-sidebar" onClick={sidebarCompactToggler}>
          <div className="header bg-light">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup className="flex-row">
              <ListGroupItem className="bg-dark sidebar compact"></ListGroupItem>
              <ListGroupItem className="bg-light body"></ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default SidebarType;
