import { Brand, Details, Febric, Href, Video } from "@/Constant";
import { Fragment, useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const ClothsDetails = () => {
  const [activeTab, setActiveTab] = useState("1");
  const Description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  return (
    <Fragment>
      <Nav tabs className="border-tab">
        <NavItem id="myTab" role="tablist">
          <NavLink href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => setActiveTab("1")}>
            {Febric}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem id="myTab" role="tablist">
          <NavLink href={Href} className={activeTab === "2" ? "active" : ""} onClick={() => setActiveTab("2")}>
            {Video}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem id="myTab" role="tablist">
          <NavLink href={Href} className={activeTab === "3" ? "active" : ""} onClick={() => setActiveTab("3")}>
            {Details}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
        <NavItem id="myTab" role="tablist">
          <NavLink href={Href} className={activeTab === "4" ? "active" : ""} onClick={() => setActiveTab("4")}>
            {Brand}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <p className="mb-0 m-t-20">{Description}</p>
          <p className="mb-0 m-t-20">{Description}</p>
        </TabPane>
        <TabPane tabId="2">
          <p className="mb-0 m-t-20">{Description}</p>
        </TabPane>
        <TabPane tabId="3">
          <p className="mb-0 m-t-20"> {Description}</p>
        </TabPane>
        <TabPane tabId="4">
          <p className="mb-0 m-t-20">{Description}</p>
        </TabPane>
      </TabContent>
    </Fragment>
  );
};
export default ClothsDetails;
