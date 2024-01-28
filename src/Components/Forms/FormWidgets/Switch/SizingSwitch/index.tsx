import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SwitchSizing } from "@/Constant";
import { SwitchSizingData } from "@/Data/Forms/FormWidgets";
import { Card, CardBody, Col, Input, Label, Media } from "reactstrap";

const SizingSwitch = () => {
  return (
    <Col sm="12" xl="4" >
      <Card>
        <CommonCardHeader heading={SwitchSizing} />
        <CardBody className="row switch-showcase">
          <Col sm="12">
            {SwitchSizingData.map((item, i) => (
              <Media key={i}>
                <Label className="col-form-label m-r-10">{item.title}</Label>
                <Media body className={item.mediaClass}>
                  <Label className="switch">
                    <Input type="checkbox" />
                    <span className={item.spanClass}></span>
                  </Label>
                </Media>
              </Media>
            ))}
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SizingSwitch;
