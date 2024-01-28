import { Row, Col, Table, Card } from "reactstrap";
import { TableData, TableRepeatData } from "@/Data/Table";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const BreakPointSpecific = () => {
  return (
    <Row className="card-block">
      <Col sm="12" lg="12" xl="12">
        <Card>
          <CommonCardHeader heading="BreakpointSpecific" />
          <div className="table-responsive">
            {TableRepeatData.map((item, i) => (
              <Table key={i} className="table-responsive-sm">
                <thead>
                  <tr>
                    <th>{"#"}</th>
                    <th>{"First Name"}</th>
                    <th>{"Last Name"}</th>
                    <th>{"Username"}</th>
                  </tr>
                </thead>
                <tbody>
                  {TableData.slice(0, 3).map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.user_name}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ))}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default BreakPointSpecific;
