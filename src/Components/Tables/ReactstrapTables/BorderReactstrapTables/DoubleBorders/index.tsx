import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Col, Card, Table } from "reactstrap";
import { DoubleBorderSubHeading, TableData, TableHeadData } from "@/Data/Table";
import { DoubleBorder } from "@/Constant";

const DoubleBorderTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={DoubleBorder} subHeading={DoubleBorderSubHeading} />
        <div className="table-responsive">
          <Table className="table-double">
            <thead>
              <tr>
                {TableHeadData.slice(0,4).map((item, i) => (
                  <th key={i} scope="col">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TableData.map((item, i) => (
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

export default DoubleBorderTable;
