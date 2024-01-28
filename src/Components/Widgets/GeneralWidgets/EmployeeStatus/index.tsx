import { Designation, Employee_Status, Experience, ImagePath, Name, SkillLevel } from "@/Constant";
import { CommonWidgetsDropdown, EmployeeStatusData } from "@/Data/Widgets/General";
import Image from "next/image";
import { Card, CardBody, CardHeader, Col, Media, Progress, Table } from "reactstrap";

const EmployeeStatus = () => {
  return (
    <Col xl="6" className=" box-col-6">
      <Card className="employee-status">
        <CardHeader className="pb-0">
          <Media>
            <Media body>
              <h5>{Employee_Status}</h5>
            </Media>
            {CommonWidgetsDropdown}
          </Media>
        </CardHeader>
        <CardBody>
          <div className="user-status table-responsive">
            <Table borderless>
              <thead>
                <tr>
                  <th scope="col">{Name}</th>
                  <th scope="col">{Designation}</th>
                  <th scope="col">{SkillLevel}</th>
                  <th scope="col">{Experience}</th>
                </tr>
              </thead>
              <tbody>
                {EmployeeStatusData.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <Media>
                        <Image height={50} width={50} src={`${ImagePath}/user${item.image}`} alt="" />
                        <Media body>
                          <h5>
                            {item.title} <span className="text-muted">({item.online})</span>
                          </h5>
                        </Media>
                      </Media>
                    </td>
                    <td>{item.position}</td>
                    <td>
                      <div className="progress-showcase">
                        <Progress className={`bg-${item.classname}`} style={{ height: "8px", width: item.skill }}></Progress>
                      </div>
                    </td>
                    <td className="digits">{item.experience}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default EmployeeStatus;
