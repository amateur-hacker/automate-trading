import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BorderlessTable } from "@/Constant";
import { BorderlessTableSubHeading, TableData, TableHeadData } from "@/Data/Table";
import { Card, Col, Table } from "reactstrap";

const BorderLessTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={BorderlessTable} subHeading={BorderlessTableSubHeading} />
        <div className="table-responsive">
          <Table className="table-bordernone">
            <thead>
              <tr>
                {TableHeadData.slice(0, 4).map((item, i) => (
                  <th key={i} scope="col">
                    {item}
                  </th>
                ))}
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
      </Card>
    </Col>
  );
};

export default BorderLessTable;
