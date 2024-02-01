import { Href, NoTasksFound } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { TaskReducerTypes } from "@/Type/Tasks";
import { Link, MoreHorizontal, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { CardBody, Table, Button } from "reactstrap";
import SweetAlert from "sweetalert2";

import { SidebarMenu } from "@/Data/Sidebar";
import { RootState } from "@/Redux/ReduxStore";
import { usePathname } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useSelector } from "react-redux";
import { updateApiButtonClicked } from "@/Redux/CustomSlices/AddApiSlice";

import {
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
import RightSideBar from "@/Components/SocialApp/Common/RightSidebar";

const CreatedByMe = () => {
  const { allTask } = useAppSelector(
    (state: TaskReducerTypes) => state.TaskReducer
  );
  const dispatch = useDispatch();
  const addApi = useSelector((state: RootState) => state.addApi);
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
  const [getUserApidata, setGetUserApiData] = useState([]);

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

      const response = await fetch("https://nextlevelpine.com/get-api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken ?? "",
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

  const handleGetUserApi = async () => {
    try {
      const authToken = Cookies?.get("authtoken");

      const response = await fetch("https://nextlevelpine.com/get-user-api", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken ?? "",
        },
      });

      // const data = await response.text();
      // console.log(data);

      const data = await response.json();
      setGetUserApiData(data["$values"]);
      console.log(data["$values"]);
      // toast(data);
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

  const deleteTask = (userId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch({ type: "RemoveTask", payload: userId });
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  useEffect(() => {
    handleGetUserApi();
  }, []);

  interface userItem {
    apiId: String;
    apiName: String;
    apiType: String;
  }

  return (
    <CardBody className="p-0">
      <div className="taskadd">
        <div className="table-responsive table-borderless">
          <Table borderless>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {getUserApidata &&
              getUserApidata.length &&
              !addApi.apiButtonClicked ? (
                getUserApidata.map((userItem: userItem, index) => (
                  // Assuming getUserApidata is an array you want to map over
                  <tr key={index} className="d-flex">
                    <td>
                      <h5
                        className="task_title_0 p-2  rounded inline-block"
                        style={{ background: "rgba(255,100,0, 0.1)" }}
                      >
                        API ID - {userItem.apiId}
                      </h5>
                      <h6 className="ms-3 inline-block">
                        Type - {userItem.apiType}
                      </h6>
                      <p
                        style={{ width: "max-content" }}
                        className="project_name_0 ms-2 block"
                      >
                        {userItem.apiName}
                      </p>
                    </td>

                    <div className="">
                      <td>
                        <a className="me-2" href={Href}>
                          <Link />
                        </a>
                        <a href={Href}>
                          <MoreHorizontal />
                        </a>
                      </td>
                      <td>
                        <a href={Href} onClick={() => deleteTask(index)}>
                          {/* Assuming Trash2 is a component or an icon */}
                          <Trash2 />
                        </a>
                      </td>
                    </div>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>
                    <div className="add-api-container">
                      <div className="border">
                        <span>Kite</span>
                        <Button
                          outline
                          color="primary"
                          // color="outline"
                          onClick={() =>
                            setAddApiSideBarToggle(!addApiSideBarToggle)
                          }
                        >
                          Add Api
                        </Button>
                        <div className="">
                          <Offcanvas
                            direction="end"
                            isOpen={addApiSideBarToggle}
                            // unmountOnClose={addApiSideBarToggle}
                            toggle={() =>
                              setAddApiSideBarToggle(!addApiSideBarToggle)
                            }
                            autoFocus
                            keyboard={true}
                            className="offcanvas"
                          >
                            <OffcanvasHeader
                              toggle={() =>
                                setAddApiSideBarToggle(!addApiSideBarToggle)
                              }
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
                                        onChange={(e) =>
                                          setApiName(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                          setApiKey(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                          setApiSecretKey(e.target.value)
                                        }
                                      />
                                    </FormGroup>
                                  </Col>
                                </Row>
                                <Button
                                  color="outline-primary"
                                  className="me-1"
                                >
                                  Save API
                                </Button>
                                &nbsp;&nbsp;
                                <Button
                                  color="primary"
                                  onClick={handleResetForm}
                                >
                                  Reset
                                </Button>
                              </Form>
                            </OffcanvasBody>
                          </Offcanvas>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
      {/* {addApi.apiButtonClicked && (
        <div className="add-api-container">
          <div className="border">
            <span>Kite</span>
            <Button
              outline
              color="primary"
              // color="outline"
              onClick={() => setAddApiSideBarToggle(!addApiSideBarToggle)}
            >
              Add Api
            </Button>
            <div className="">
              <Offcanvas
                direction="end"
                isOpen={addApiSideBarToggle}
                // unmountOnClose={addApiSideBarToggle}
                toggle={() => setAddApiSideBarToggle(!addApiSideBarToggle)}
                autoFocus
                keyboard={true}
                className="offcanvas"
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
                    <Button color="outline-primary" className="me-1">
                      Save API
                    </Button>
                    &nbsp;&nbsp;
                    <Button color="primary" onClick={handleResetForm}>
                      Reset
                    </Button>
                  </Form>
                </OffcanvasBody>
              </Offcanvas>
            </div>
          </div>
        </div>
      )} */}
    </CardBody>
  );
};

export default CreatedByMe;
