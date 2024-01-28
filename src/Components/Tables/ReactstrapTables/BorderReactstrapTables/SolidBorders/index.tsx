import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Col, Card, Table } from "reactstrap";
import { SolidBorderSubHeading, TableData, TableHeadData } from "@/Data/Table";
import { SolidBorder } from "@/Constant";

const SolidBorderTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={SolidBorder} subHeading={SolidBorderSubHeading} />
        <div className="table-responsive">
          <Table>
            <thead>
              <tr className="border-solid">
                {TableHeadData.slice(0,4).map((item, i) => (
                  <th key={i} scope="col">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TableData.slice(0, 3).map((item, i) => (
                <tr className="border-solid" key={i}>
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

export default SolidBorderTable;
