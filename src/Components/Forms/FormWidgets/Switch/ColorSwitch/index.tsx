import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SwitchColor } from "@/Constant";
import { ColorSwitchData } from "@/Data/Forms/FormWidgets";
import { Card, CardBody, Col, Input, Label, Media } from "reactstrap";

const ColorSwitch = () => {
  return (
    <Col sm="12" xl="6" lg="12" md="6">
      <Card>
        <CommonCardHeader heading={SwitchColor} />
        <CardBody className="row switch-showcase height-equal">
          <Col sm="12">
            {ColorSwitchData.map((item, i) => {
              return (
                <Media key={i}>
                  <Label className="col-form-label m-r-10">{item.title}</Label>
                  <Media body className="text-end icon-state">
                    <Label className="switch">
                      <Input type="checkbox" />
                      <span className={item.spanClass}></span>
                    </Label>
                  </Media>
                </Media>
              );
            })}
          </Col>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ColorSwitch;
