import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { FlatButton, PrimaryButton } from "@/Constant";
import { ButtonsData, FlatButtonsSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const FlatButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={FlatButton} subHeading={FlatButtonsSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button className="btn-square" color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button key={i} className="btn-square" color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FlatButtons;
