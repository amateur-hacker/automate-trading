import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Display1, DisplayHeading } from "@/Constant";
import { DisplayHeadingData, DisplayHeadingsSubHeading } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const DisplayHeadings = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={DisplayHeading} subHeading={DisplayHeadingsSubHeading} />
        <CardBody className=" typography radio-text">
          <h1 className="display-1">{Display1}</h1>
          {DisplayHeadingData.map((item, i) => (
            <h1 key={i} className={item.className}>
              {item.heading}
            </h1>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayHeadings;
