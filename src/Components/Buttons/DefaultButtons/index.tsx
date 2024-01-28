import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DefaultButtons, PrimaryButton } from "@/Constant";
import { ButtonsData, DefaultButtonsSubHeading } from "@/Data/Buttons";
import { Button, Card, CardBody, Col } from "reactstrap";

const DefaultButton = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={DefaultButtons} subHeading={DefaultButtonsSubHeading} />
        <CardBody>
          <div className="btn-showcase">
            <Button color="primary">{PrimaryButton}</Button>
            {ButtonsData.map((item, i) => (
              <Button key={i} color={item.colorClass}>
                {item.title}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultButton;
