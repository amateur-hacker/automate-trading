import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineButton, PrimaryButton } from "@/Constant";
import { ButtonsData, OutlineButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const OutlineButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={OutlineButton} subHeading={OutlineButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button outline color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button key={i} color={item.colorClass} outline>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineButtons;
