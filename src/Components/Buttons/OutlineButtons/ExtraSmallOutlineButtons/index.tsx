import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineExtraSmallButton, PrimaryButton } from "@/Constant";
import { ButtonsData, OutlineExtraSmallButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const OutlineExtraSmallButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={OutlineExtraSmallButton} subHeading={OutlineExtraSmallButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button size="xs" outline color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button size="xs" key={i} color={item.colorClass} outline>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineExtraSmallButtons;
