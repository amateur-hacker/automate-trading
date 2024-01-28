import { ContactReducerType } from "@/Type/Contacts";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardBody, Col } from "reactstrap";
import TabComponents from "../TabComponents";
import HeaderContacts from "./HeaderContacts";
import NavComponent from "./NavComponent";

const SidebarContacts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { users } = useSelector((state: ContactReducerType) => state.ContactReducer);
  const [activeTab, setActiveTab] = useState<string>("1");
  const callback = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <>
      <Col xl="3" className="box-col-3 xl-30">
        <div className="md-sidebar">
          <Button color="primary" className=" md-sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
           Contact Filter
          </Button>
          <div className={`md-sidebar-aside ${isOpen ? "open" : ""}`}>
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <HeaderContacts />
                  <NavComponent callbackActive={callback} />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </Col>
      <TabComponents activeTab={activeTab} />
    </>
  );
};

export default SidebarContacts;
