import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Col, Card, Table, Row } from "reactstrap";
import { TableData, TableHeadOption2SubHeading, TableHeadOptionDarkSubHeading } from "@/Data/Table";
import { TableHeadOptions } from "@/Constant";

const TableHeadOption2 = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={TableHeadOptions} subHeading={TableHeadOption2SubHeading} />
        <Row className="card-block ">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <thead className="table-light">
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <tbody>
                  {TableData.slice(0, 3).map((item, i) => (
                    <tr key={i}>
                      <th scope="row">{item.id}</th>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.user_name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableHeadOption2;
