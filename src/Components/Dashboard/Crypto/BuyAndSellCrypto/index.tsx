import { Buy, Sell } from "@/Constant";
import { useState } from "react";
import { Card, CardHeader, Col, Media, Nav, NavItem, NavLink } from "reactstrap";
import BuyForm from "./BuyForm";

const BuySellCard = () => {
  const [activeTab, setActiveTab] = useState("1");
  return (
    <Col xl="5" md="6" className="dash-xl-50 box-col-6">
      <Card className="buy-sell">
        <CardHeader className="card-no-border">
          <Media>
            <Media body>
              <Nav className="nav-pills">
                <NavItem>
                  <NavLink className={activeTab === "1" ? "active" : ""} id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" onClick={() => setActiveTab("1")}>
                    {Buy}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={activeTab === "2" ? "active" : ""} id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" onClick={() => setActiveTab("2")}>
                    {Sell}
                  </NavLink>
                </NavItem>
              </Nav>
            </Media>
            <div className="media-end">
              <h5>USD Balance: $ 7200.00 </h5>
            </div>
          </Media>
        </CardHeader>
        <BuyForm />
      </Card>
    </Col>
  );
};
export default BuySellCard;
