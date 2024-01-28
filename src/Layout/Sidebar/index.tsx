import { SidebarMenu } from "@/Data/Sidebar";
import { RootState } from "@/Redux/ReduxStore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
} from "reactstrap";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  const [sidebarMargin, setSidebarMargin] = useState(0);
  const [apiType, setApiType] = useState("");
  const [apiName, setApiName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [apiSecretKey, setApiSecretKey] = useState("");
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
      const response = await fetch("https://nextlevelpine.com/nlbweb/add-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ApiType: "1",
          APINAME: apiName,
          API_KEY: apiKey,
          API_SECRET_KEY: apiSecretKey,
        }),
      });

      const data = await response.json();
      if (data.message.includes("email already exists")) {
        toast.error("Email Already Exist");
        const emailInput = document.getElementById("email") as HTMLInputElement;
        emailInput.focus();
        emailInput.scrollIntoView();
        return;
      }
      const wait = (milliseconds: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      await toast.promise(wait(1500), {
        pending: "Signing up",
        success: "Signup Successfully 👌",
        error: "Error While Signing up 🤯",
      });
    } catch (error) {
      console.log(`Error coming from registerUser function: ${error.message}`);
    }
  };

  return (
    <div className={`sidebar-wrapper ${sideBarToggle}`} id="sidebar-wrapper">
      <div className="addapi-sidebar">
        <ModalBody>
          <div className="modal-header">
            <h5 className="modal-title">Add API</h5>
            <Button color="transprant" className="btn-close"></Button>
          </div>
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
                  />
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>Api Key</Label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="ADD API Key"
                    required
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
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button color="outline-dark" className="me-1">
              Save Zerodha
            </Button>
            &nbsp;&nbsp;
            <Button color="outline-primary">Reset</Button>
          </Form>
        </ModalBody>
      </div>
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
};

export default Sidebar;
