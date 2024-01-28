import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import CommonUL from "../../../Common/CommonUl";
import ConfigDB from "@/Config/ThemeConfig";

const LayoutType = () => {
const  handleConfig=(layout:string)=>{
  ConfigDB.data.settings.layout_type=layout
}
  const setLTR = () => {
    const htmlElement = document.querySelector("html");
    const layoutElement = document.getElementById("mainBody");
    layoutElement?.classList.remove("rtl");
    layoutElement?.classList.remove("box-layout");
    layoutElement?.classList.add("ltr");
    handleConfig("ltr")
    htmlElement?.setAttribute("dir", "ltr");
  };
  const setRTL = () => {
    const htmlElement = document.querySelector("html");
    const layoutElement = document.getElementById("mainBody");
    layoutElement?.classList.remove("ltr");
    layoutElement?.classList.remove("box-layout");
    layoutElement?.classList.add("rtl");
    handleConfig("rtl")
    htmlElement?.setAttribute("dir", "rtl");
  };
  const setBOX = () => {
    const htmlElement = document.querySelector("html");
    const layoutElement = document.getElementById("mainBody");
    layoutElement?.classList.remove("ltr");
    layoutElement?.classList.remove("rtl");
    layoutElement?.classList.add("box-layout");
    handleConfig("box-layout")
    htmlElement?.setAttribute("dir", "ltr");
  };

  return (
    <>
      <h6>Layout Type</h6>
      <ListGroup className="main-layout layout-grid flex-row">
        <ListGroupItem onClick={setLTR}>
          <div className="header bg-light">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup>
              <ListGroupItem className="bg-light sidebar"></ListGroupItem>
              <ListGroupItem className="bg-light body">
                <Badge color="primary">LTR</Badge>
              </ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>
        <ListGroupItem onClick={setRTL}>
          <div className="header bg-light">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup>
              <ListGroupItem className="bg-light body">
                <Badge color="primary">RTL</Badge>
              </ListGroupItem>
              <ListGroupItem className="bg-light sidebar"></ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>
        <ListGroupItem onClick={setBOX}>
          <div className="header bg-light">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup>
              <ListGroupItem className="bg-light sidebar"></ListGroupItem>
              <ListGroupItem className="bg-light body">
                <Badge color="primary">Box</Badge>
              </ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default LayoutType;
