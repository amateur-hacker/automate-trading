import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TextColorHeading } from "@/Constant";
import { TextColorCardData, TextColorSubHeading } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const TextColor = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={TextColorHeading} subHeading={TextColorSubHeading} />
        <CardBody>
          {TextColorCardData.map((item, i) => (
            <p key={i} className={item.className}>
              {item.text} <code>.{item.className}</code> class
            </p>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColor;
