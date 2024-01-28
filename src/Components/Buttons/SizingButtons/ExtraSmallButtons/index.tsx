import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ExtraSmallButton, PrimaryButton } from "@/Constant";
import { ButtonsData, ExtraSmallButtonsSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const ExtraSmallButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ExtraSmallButton} subHeading={ExtraSmallButtonsSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button size="xs" color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button size="xs" key={i} color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExtraSmallButtons;
