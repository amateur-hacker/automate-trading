import { Href, NewBookmark, Tags, Views } from "@/Constant";
import { sideBarData, sideBarData2 } from "@/Data/Bookmark";
import { useState } from "react";
import { Bookmark, PlusCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Button, Nav, NavItem } from "reactstrap";
import BookmarkModal from "./ModalBookMark";
import ModalTag from "./ModalTag";
import { RootState } from "@/Redux/ReduxStore";

const NavTab = () => {
  const { activeTabss } = useSelector((state: RootState) => state.BookMarkReducer);
  const [addModal, setAddModal] = useState(false);
  const [tagModal, setTagModal] = useState(false);
  const dispatch = useDispatch();
  const onHandleClick = (id: string) => {
    dispatch({ type: "updateActiveTabss", payload: id });
  };
  const tagToggle = () => {
    setTagModal(!tagModal);
  };
  const addToggle = () => {
    setAddModal(!addModal);
  };
  return (
    <Nav className="main-menu" role="tablist">
      <NavItem>
        <Button color="primary" className="badge-light-primary d-block w-100 btn-mail" type="button" onClick={addToggle}>
          <Bookmark className="me-2" />
          {NewBookmark}
          <BookmarkModal value={addModal} addToggle={addToggle} />
        </Button>
      </NavItem>
      <NavItem>
        <span className="main-title"> {Views}</span>
      </NavItem>
      {sideBarData.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTabss === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </NavItem>
      ))}
      <NavItem>
        <hr />
      </NavItem>
      <NavItem>
        <span className="main-title">
          {Tags}
          <span className="pull-right">
            <a href={Href} onClick={tagToggle}>
              <PlusCircle />
            </a>
          </span>
        </span>
      </NavItem>
      <ModalTag value={tagModal} tagToggle={tagToggle} />
      {sideBarData2.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTabss === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavTab;
