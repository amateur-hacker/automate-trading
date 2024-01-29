import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import NavClass from "./NavClass";
import TabClass from "./TabClass";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import axios from "axios";
import { useDispatch } from "react-redux";

const Tasks = () => {
  const dispatch = useDispatch();
  const getTask = async () => {
    try {
      await axios.get("/api/taskApi").then((resp) => {
        dispatch({ type: "setAllTask", payload: resp.data });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTask();
  }, []);
  const [activeTab, setActiveTab] = useState("1");
  const activeToggle = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <>
      {/* <CommonBreadcrumb parent="Dashboard" pageTitle="Add Api" /> */}
      <Container fluid>
        <div className="email-wrap bookmark-wrap tasks-items">
          <Row>
            <NavClass activeToggle={activeToggle} />
            <TabClass activeTab={activeTab} />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Tasks;
