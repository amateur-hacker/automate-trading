import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { EdgeButton, PrimaryButton } from "@/Constant";
import { ButtonsData, EdgeButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const EdgeButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={EdgeButton} subHeading={EdgeButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button className="btn-pill" color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button key={i} className="btn-pill" color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EdgeButtons;
