import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisabledButton, PrimaryButton } from "@/Constant";
import { ButtonsData, DisabledButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const DisabledButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={DisabledButton} subHeading={DisabledButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button disabled color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button key={i} disabled color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisabledButtons;
