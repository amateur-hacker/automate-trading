import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineLargeButton, PrimaryButton } from "@/Constant";
import { ButtonsData, OutlineLargeButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const OutlineLargeButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={OutlineLargeButton} subHeading={OutlineLargeButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button size="lg" outline color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button size="lg" key={i} color={item.colorClass} outline>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineLargeButtons;
