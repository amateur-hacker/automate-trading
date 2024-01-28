import { Href, ImagePath, MARKJENCOEMAIL, MarkJecno } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import { Col,Button, Card, CardBody, Media } from "reactstrap";
import NavTab from "./NavTab";

const SideBar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <Col xl="3" className="box-col-3">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={() => setToggleSidebar(!toggleSidebar)}>
          Bookmark Filter
        </Button>
        <div className={`md-sidebar-aside ${toggleSidebar ? "open" : ""}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark">
                <Media>
                  <div className="media-size-email">
                    <Image className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="user" height={50} width={50} />
                  </div>
                  <Media body>
                    <h6 className="f-w-600">{MarkJecno}</h6>
                    <p>{MARKJENCOEMAIL}</p>
                  </Media>
                </Media>
                <NavTab />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default SideBar;
