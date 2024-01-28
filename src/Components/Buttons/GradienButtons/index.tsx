import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GradienButton, PrimaryButton } from "@/Constant";
import { ButtonsData, GradienButtonSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const GradienButtons = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={GradienButton} subHeading={GradienButtonSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button className="btn-primary-gradien">{PrimaryButton}</Button>
            {ButtonsData.map((item, i) => (
              <Button key={i} className={`btn-${item.colorClass}-gradien`}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GradienButtons;
