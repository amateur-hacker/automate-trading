import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TextBackgroundUtilities } from "@/Constant";
import { TextBackgroundUtilitiesData, TextBackgroundUtilitiesSubHeading } from "@/Data/Table";
import { Card, Col, Table } from "reactstrap";

const TextOrBackgroundUtilities = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={TextBackgroundUtilities} subHeading={TextBackgroundUtilitiesSubHeading} />
        <div className="table-responsive">
          <Table className="table-borderedfor">
            <thead>
              <tr>
                <th scope="col">{"#"}</th>
                <th scope="col">{"Heading"}</th>
                <th scope="col">{"Heading"}</th>
              </tr>
            </thead>
            <tbody>
              {TextBackgroundUtilitiesData.map((item, i) => (
                <tr className={item.trClass ? item.trClass : ""} key={i}>
                  <td className={item.tdClass}>{i + 1}</td>
                  <td className={item.tdClass}>{item.tdText1}</td>
                  <td className={item.tdClass}>{item.tdText1}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default TextOrBackgroundUtilities;
