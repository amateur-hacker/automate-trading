import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PrimaryButton, SmallButton } from "@/Constant";
import { ButtonsData, SmallButtonsSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const SmallButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={SmallButton} subHeading={SmallButtonsSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button size="sm" color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button size="sm" key={i} color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SmallButtons;
