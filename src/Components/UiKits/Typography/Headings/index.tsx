import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FancyDisplayHeading, Heading, WithFadedSecondaryText } from "@/Constant";
import { HeadingsSubHeading } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

export const Headings = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Heading} subHeading={HeadingsSubHeading} />
        <CardBody className=" typography radio-text">
          <h3>
            {FancyDisplayHeading}
            <small className="text-muted">{WithFadedSecondaryText}</small>
          </h3>
        </CardBody>
      </Card>
    </Col>
  );
};
