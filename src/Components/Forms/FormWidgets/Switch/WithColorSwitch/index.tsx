import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SwitchWithColor } from "@/Constant";
import { SwitchWithColorData } from "@/Data/Forms/FormWidgets";
import { Card, CardBody, Col, Input, Label, Media } from "reactstrap";

const WithColorSwitch = () => {
  return (
    <Col sm="12" xl="4">
      <Card>
        <CommonCardHeader heading={SwitchWithColor} />
        <CardBody className="row switch-showcase">
          <Col sm="12">
            {SwitchWithColorData.map((item, i) => (
              <Media key={i}>
                <Label className="col-form-label m-r-10">{item.title}</Label>
                <Media body className={item.mediaClass}>
                  <Label className="switch">
                    <Input type="checkbox" disabled={item.disabled} />
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
export default WithColorSwitch;
