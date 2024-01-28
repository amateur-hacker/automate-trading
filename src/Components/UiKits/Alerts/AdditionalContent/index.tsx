import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AdditionalContent } from "@/Constant";
import { AdditionalContentSubHeading, AdditionalData } from "@/Data/UiKits/Alert/AdditionalContent";
import { Alert, Card, CardBody, Col } from "reactstrap";

const AdditionalContents = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={AdditionalContent} subHeading={AdditionalContentSubHeading} />
        <CardBody>
          <Alert color="primary ">
            <h4 className="alert-heading">{"Well done!"}</h4>
            <p>{"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}</p>
            <hr />
            <p className="mb-0">{"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."}</p>
          </Alert>
          {AdditionalData.map((element, index) => (
            <Alert key={index} color={element.color}>
              <h4 className="alert-heading">{"Well done!"}</h4>
              <p>{element.paragraphOne}</p>
              <hr />
              <p className="mb-0">{element.paragraphTwo}</p>
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalContents;
