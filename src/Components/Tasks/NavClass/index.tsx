import { TagData, TaskData } from "@/Data/Tasks";
import { NavClassProps } from "@/Type/Tasks";
import { useCallback, useState } from "react";
import { PlusCircle } from "react-feather";
import { Card, CardBody, Col, Nav, NavItem } from "reactstrap";
import { Href, Tags, Views } from "../../../Constant";
import CreateTag from "./CreateTag";
import NewTaskClass from "./NewTaskClass";
import ProfileHeader from "./ProfileHeader";

const NavClass = ({ activeToggle }: NavClassProps) => {
  const [activeTab, setActiveTab] = useState("1");
  const [tagModal, setTagModal] = useState(false);
  const tagToggle = () => setTagModal(!tagModal);
  const tagCallback = useCallback((modal: boolean) => {
    setTagModal(modal);
  }, []);
  return (
    <Col xl="3" className="box-col-3">
      <div className="email-left-aside">
        <Card>
          <CardBody>
            <div className="email-app-sidebar left-bookmark">
              <ProfileHeader />
              <Nav className="main-menu" role="tablist">
                <NavItem>
                  <NewTaskClass />
                </NavItem>
                <NavItem>
                  <span className="main-title">{Views}</span>
                </NavItem>
                {TaskData.map((item) => (
                  <NavItem key={item.id}>
                    <a
                      href={Href}
                      className={activeTab === item.activeTab ? "active" : ""}
                      onClick={() => {
                        setActiveTab(item.activeTab);
                        activeToggle(item.activeTab);
                      }}
                    >
                      <span className="title"> {item.title}</span>
                    </a>
                  </NavItem>
                ))}
                <NavItem>
                  <hr />
                </NavItem>
                <NavItem>
                  <span className="main-title">
                    {Tags}
                    <span className="pull-right" onClick={tagToggle}>
                      <PlusCircle />
                    </span>
                  </span>
                </NavItem>
                <CreateTag tagCallback={tagCallback} tagModal={tagModal} />
                {TagData.map((item) => (
                  <NavItem key={item.id}>
                    <a
                      href={Href}
                      className={activeTab === item.activeTab ? "show" : ""}
                      onClick={() => {
                        setActiveTab(item.activeTab);
                        activeToggle(item.activeTab);
                      }}
                    >
                      <span className="title"> {item.title}</span>
                    </a>
                  </NavItem>
                ))}
              </Nav>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};

export default NavClass;
