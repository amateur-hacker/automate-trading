import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicSwitch } from "@/Constant";
import { BasicSwitchData } from "@/Data/Forms/FormWidgets";
import { Card, CardBody, Col, Input, Label, Media } from "reactstrap";

const BasicSwitches = () => {
  return (
    <Col sm="12" xl="6" lg="12" md="6">
      <Card>
        <CommonCardHeader heading={BasicSwitch} />
        <CardBody className="row switch-showcase height-equal">
          <Col sm="12">
            {BasicSwitchData.map((item, i) => {
              return (
                <Media key={i}>
                  <Label className="col-form-label m-r-10">{item.title}</Label>
                  <Media body className={item.mediaClass}>
                    <Label className="switch">
                      <Input type="checkbox" disabled={item.disabled} />
                      <span className="switch-state"></span>
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
export default BasicSwitches;
