import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SwitchOutline } from "@/Constant";
import { ColorSwitchData } from "@/Data/Forms/FormWidgets";
import { Card, CardBody, Col, Input, Label, Media } from "reactstrap";

const OutlineSwitch = () => {
  return (
    <Col sm="12" xl="6" lg="12" md="6">
      <Card>
        <CommonCardHeader heading={SwitchOutline} />
        <CardBody className="row switch-showcase height-equal">
          <Col sm="12">
            {ColorSwitchData.map((item, i) => {
              return (
                <Media key={i}>
                  <Label className="col-form-label m-r-10">{item.title}</Label>
                  <Media body className={item.mediaClass}>
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
export default OutlineSwitch;
