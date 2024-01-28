import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DisabledOutlineButton, PrimaryButton } from "@/Constant";
import { ButtonsData, OutlineDisabledButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const OutlineDisabledButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={DisabledOutlineButton} subHeading={OutlineDisabledButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button disabled outline color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button disabled key={i} color={item.colorClass} outline>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineDisabledButtons;
