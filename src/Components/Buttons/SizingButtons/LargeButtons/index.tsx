import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LargeButton, PrimaryButton } from "@/Constant";
import { ButtonsData, LargeButtonsSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const LargeButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={LargeButton} subHeading={LargeButtonsSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button size="lg" color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button size="lg" key={i} color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LargeButtons;
