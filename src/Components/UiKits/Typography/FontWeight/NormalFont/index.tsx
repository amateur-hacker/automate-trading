import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Normal400 } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";

const NormalFont = () => {
  return (
    <Col sm="6" xl="4">
      <Card>
        <CommonCardHeader heading={Normal400} />
        <CardBody className=" typography radio-text">
          <h1 className="f-w-400">{Heading1}</h1>
          <h2 className="f-w-400">{Heading2}</h2>
          <h3 className="f-w-400">{Heading3}</h3>
          <h4 className="f-w-400">{Heading4}</h4>
          <h5 className="f-w-400">{Heading5}</h5>
          <h6 className="f-w-400">{Heading6}</h6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NormalFont;
