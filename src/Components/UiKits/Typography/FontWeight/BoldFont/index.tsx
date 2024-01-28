import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Bold700, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";

const BoldFont = () => {
  return (
    <Col sm="6" xl="4">
      <Card>
        <CommonCardHeader heading={Bold700} />
        <CardBody className=" typography radio-text">
          <h1 className="f-w-700">{Heading1}</h1>
          <h2 className="f-w-700">{Heading2}</h2>
          <h3 className="f-w-700">{Heading3}</h3>
          <h4 className="f-w-700">{Heading4}</h4>
          <h5 className="f-w-700">{Heading5}</h5>
          <h6 className="f-w-700">{Heading6}</h6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BoldFont;
