import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineSelect2Options } from "@/Data/Forms/FormWidgets";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

const OutlineSelect2 = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader heading="Outline Color Variant" />
        <CardBody>
          <div className="mb-2">
            <Label className="col-form-label">Primary Select</Label>
            <Input className="form-control-primary btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Secondary Select</Label>
            <Input className="form-control-secondary btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Success Select</Label>
            <Input className="form-control-success btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Info Select</Label>
            <Input className="form-control-info btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Warning Select</Label>
            <Input className="form-control-warning btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Danger Select</Label>
            <Input className="form-control-danger btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div>
            <Label className="col-form-label">Inverse Select</Label>
            <Input className="form-control-inverse btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineSelect2;
