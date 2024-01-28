import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PrimaryButton, RaisedButton } from "@/Constant";
import { ButtonsData, RaisedButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const RaisedButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={RaisedButton} subHeading={RaisedButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button className="btn-pill btn-air-primary" color="primary">
              {PrimaryButton}
            </Button>
            {ButtonsData.map((item, i) => (
              <Button key={i} className={`btn-pill btn-air-${item.colorClass}`} color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RaisedButtons;
