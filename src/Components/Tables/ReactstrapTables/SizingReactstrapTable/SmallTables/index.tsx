import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SmallTable } from "@/Constant";
import { SmallTableSubHeading, TableData, TableHeadData } from "@/Data/Table";
import { Col, Card, Table } from "reactstrap";

const SmallTables = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={SmallTable} subHeading={SmallTableSubHeading} />
        <div className="table-responsive">
          <Table size="sm">
            <thead>
              <tr>
                {TableHeadData.slice(0, 4).map((item, i) => (
                  <th key={i}>{item}</th>
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

export default SmallTables;
