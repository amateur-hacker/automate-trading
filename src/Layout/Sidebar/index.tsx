import { SidebarMenu } from "@/Data/Sidebar";
import { RootState } from "@/Redux/ReduxStore";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useSelector } from "react-redux";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarList } from "./SidebarList";
import { SidebarLogo } from "./SidebarLogo";

import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
} from "reactstrap";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import React from "react";

const Sidebar = React.memo(() => {
  const [sidebarMargin, setSidebarMargin] = useState(0);
  const [apiType, setApiType] = useState("");
  const [apiName, setApiName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [apiSecretKey, setApiSecretKey] = useState("");
  const [addApiSideBarToggle, setAddApiSideBarToggle] = useState(false);
  const sideBarToggle = useSelector(
    (store: RootState) => store.headerSlice.sidebarToggle
  );
  const pathname = usePathname();
  const [prev, setPrev] = useState<number | undefined>();
  const [active, setActive] = useState(pathname ? pathname : "");
  const [activeLink, setActiveLink] = useState<string | undefined>(
    active.split("/")[active.split("/").length - 1]
  );

  const handleActive = (title: string, level: number) => {
    if (active.includes(title)) {
      if (active.includes("/")) {
        const tempt = active.split("/");
        tempt.splice(level, tempt.length - level);
        setActive(tempt.join("/"));
        setPrev(level);
      } else {
        setActive("");
      }
    } else {
      if (level < active.split("/").length) {
        if (level == prev) {
          const tempt = active.split("/");
          tempt.splice(level, 1, title);
          setActive(tempt.join("/"));
        } else {
          setActive(title);
        }
      } else {
        setPrev(level);
        const tempt = active;
        const concateString = tempt.concat(`/${title}`);
        setActive(concateString);
      }
    }
  };
  useEffect(() => {
    if (sideBarToggle != "close_icon") {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 992) {
          document
            .getElementById("sidebar-wrapper")
            ?.classList?.add("close_icon");
          document.getElementById("page-header")?.classList?.add("close_icon");
        } else {
          document
            .getElementById("sidebar-wrapper")
            ?.classList?.remove("close_icon");
          document
            .getElementById("page-header")
            ?.classList?.remove("close_icon");
        }
      });
    }
  }, []);

  const handleAddApi = async (e: any) => {
    try {
      e.preventDefault();

      const authToken = Cookies?.get("authtoken");
      console.log(authToken);

      const response = await fetch("https://nextlevelpine.com/add-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${authToken ?? ""}`,
        },
        body: JSON.stringify({
          ApiType: "1",
          APINAME: apiName,
          API_KEY: apiKey,
          API_SECRET_KEY: apiSecretKey,
        }),
      });

      // const data = await response.text();
      // console.log(data);

      const data = await response.text();
      console.log(data);
      toast(data);
      // if (response.ok) {
      // } else {
      //   console.log(`Error: ${response.status} - ${response.statusText}`);
      // }
    } catch (error) {
      console.log(`Error coming from addApi function: ${error.message}`);
    }
  };

  const handleResetForm = (e: any) => {
    e.preventDefault();
    setApiType("");
    setApiName("");
    setApiKey("");
    setApiSecretKey("");
  };

  return (
    <div className={`sidebar-wrapper ${sideBarToggle}`} id="sidebar-wrapper">
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        pauseOnHover={false}
        theme="dark"
      /> */}
      {/* <div>
        <Button
          color="primary"
          onClick={() => setAddApiSideBarToggle(!addApiSideBarToggle)}
        >
          Open
        </Button>
        <Offcanvas
          direction="end"
          isOpen={addApiSideBarToggle}
          // unmountOnClose={addApiSideBarToggle}

          toggle={() => setAddApiSideBarToggle(!addApiSideBarToggle)}
          autoFocus
          keyboard={true}
        >
          <OffcanvasHeader
            toggle={() => setAddApiSideBarToggle(!addApiSideBarToggle)}
          >
            Add API
          </OffcanvasHeader>
          <OffcanvasBody>
            <Form
              className="form-bookmark needs-validation mt-4"
              onSubmit={handleAddApi}
            >
              <Row>
                <Col md="12">
                  <FormGroup>
                    <Label>App Name</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ADD APP NAME"
                      required
                      value={apiName}
                      onChange={(e) => setApiName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Api Key</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ADD API KEY"
                      required
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col md="12">
                  <FormGroup>
                    <Label>Secret Key</Label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="ADD SECRET KEY"
                      required
                      value={apiSecretKey}
                      onChange={(e) => setApiSecretKey(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button color="outline-dark" className="me-1">
                Save API
              </Button>
              &nbsp;&nbsp;
              <Button color="primary" onClick={handleResetForm}>
                Reset
              </Button>
            </Form>
          </OffcanvasBody>
        </Offcanvas>
      </div> */}
      
      <div>
        <SidebarLogo />
        <nav className="sidebar-main hovered">
          <div
            className={`left-arrow ${sidebarMargin == 0 && "disabled"} `}
            id="left-arrow"
            onClick={() => setSidebarMargin(sidebarMargin + 700)}
          >
            <ArrowLeft />
          </div>
          <div id="sidebar-menu" style={{ margin: "0px" }}>
            <ul
              className="custom-scrollbar simple-list sidebar-links mt-1 list-group"
              id="simple-bar"
            >
              <div className="simplebar-wrapper">
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: "0px", bottom: "0px" }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ marginLeft: sidebarMargin.toString() + "px" }}
                      >
                        <li className="back-btn list-group-item">
                          <div className="mobile-back text-end">
                            <span>Back</span>{" "}
                            <i className="fa fa-angle-right ps-2" />
                          </div>
                        </li>
                        {SidebarMenu.map((item, i) => (
                          <SidebarList
                            setActiveLink={setActiveLink}
                            key={i}
                            activeLink={activeLink}
                            handleActive={handleActive}
                            active={active}
                            MENUITEMS={item.items}
                            level={0}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            {/* <SidebarFooter /> */}
          </div>
          <div
            className={`right-arrow ${sidebarMargin <= -2800 && "disabled"}`}
            id="right-arrow"
            onClick={() => setSidebarMargin(sidebarMargin - 700)}
          >
            <ArrowRight />
          </div>
        </nav>
      </div>
    </div>
  );
});

export default Sidebar;
