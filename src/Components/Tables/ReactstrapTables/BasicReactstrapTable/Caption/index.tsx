import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Caption } from "../../../../../Constant";
import { Col, Card, Table, Row } from "reactstrap";
import { CaptionSubHeading, TableData } from "@/Data/Table";

const CaptionClass = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Caption} subHeading={CaptionSubHeading} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <caption>{"List of users"}</caption>
                <thead>
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

export default CaptionClass;
