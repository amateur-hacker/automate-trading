import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineSmallButton, PrimaryButton } from "@/Constant";
import { ButtonsData, OutlineSmallButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const OutlineSmallButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={OutlineSmallButton} subHeading={OutlineSmallButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button size="sm" outline color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button size="sm" key={i} color={item.colorClass} outline>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineSmallButtons;
