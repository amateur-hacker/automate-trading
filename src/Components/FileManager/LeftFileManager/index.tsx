import { ContactUs, FREE, ImagePath, Premium, PricingPlan, Selected, Storage, TrialVersion } from "@/Constant";
import { SideButtons } from "@/Data/FileManager";
import Image from "next/image";
import { useState } from "react";
import { Database, Grid } from "react-feather";
import { Button, Card, CardBody, Col, Progress } from "reactstrap";

const LeftFileManager = () => {
  const [SideBarOpen, setSidebarOpen] = useState(false);
  const onClickHandle = () => {
    setSidebarOpen(!SideBarOpen);
  };
  return (
    <Col xl="3" className="box-col-3 pe-0 file-spacing ">
      <div className="md-sidebar job-sidebar">
        <Button color="primary" className="md-sidebar-toggle" onClick={onClickHandle}>
          File filter
        </Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${SideBarOpen ? "open" : ""}`}>
          <div className="file-sidebar">
            <Card>
              <CardBody>
                <ul>
                  {SideButtons.map((item) => {
                    return (
                      <li key={item.id}>
                        <div className={item.className}>
                          {item.icon}
                          {item.title}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <hr />
                <ul>
                  <li>
                    <Button tag={"div"} outline color="primary">
                      <Database />
                      {Storage}
                    </Button>
                    <div className="m-t-15">
                      <Progress className="progress sm-progress-bar mb-1" value={25} />
                      <h6>{"25 GB of 100 GB used"}</h6>
                    </div>
                  </li>
                </ul>
                <hr />
                <ul>
                  <li>
                    <Button tag={"div"} outline color="primary">
                      <Grid />
                      {PricingPlan}
                    </Button>
                  </li>
                  <li>
                    <div className="pricing-plan">
                      <h6>{TrialVersion} </h6>
                      <h5>{FREE}</h5>
                      <p>{"100 GB Space"}</p>
                      <Button size="xs" color="primary" outline>
                        {Selected}
                      </Button>
                      <Image className="bg-img" src={`${ImagePath}/dashboard/folder.png`} alt="" height={100} width={100} />
                    </div>
                  </li>
                  <li>
                    <div className="pricing-plan">
                      <h6>{Premium}</h6>
                      <h5>{"$5/month"}</h5>
                      <p> {"200 GB Space"}</p>
                      <Button size="xs" color="primary" outline>
                        {ContactUs}
                      </Button>
                      <Image className="bg-img" src={`${ImagePath}/dashboard/folder1.png`} alt="" height={100} width={100} />
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default LeftFileManager;
