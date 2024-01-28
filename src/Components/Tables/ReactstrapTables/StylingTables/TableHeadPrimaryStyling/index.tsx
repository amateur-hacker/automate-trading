import { Row, Col, Card, Table } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TableData, TableHeadData, TableHeadPrimaryStylingSubHeading, TableHeadStylingSubHeading } from "@/Data/Table";
import { TableHeadOptionsPrimaryBackground } from "@/Constant";

const TableHeadPrimaryStyling = () => {
  const TablePrimaryStylingData = ["primary", "success"];
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={TableHeadOptionsPrimaryBackground} subHeading={TableHeadPrimaryStylingSubHeading} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              {TablePrimaryStylingData.map((item, i) => (
                <Table key={i}>
                  <thead className={`table-${item} bg-${item}`}>
                    <tr>
                      {TableHeadData.slice(0, 4).map((item, i) => (
                        <th key={i}>{item}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {TableData.map((item) => (
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
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableHeadPrimaryStyling;
