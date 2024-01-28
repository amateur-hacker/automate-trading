import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OutlineSelect2Options } from "@/Data/Forms/FormWidgets";
import { Card, CardBody, Col, Input, Label } from "reactstrap";

const FullColoredSelect2 = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader heading="Full Colored Variant" />
        <CardBody>
          <div className="mb-2">
            <Label className="col-form-label">Primary Select</Label>
            <Input className="form-control-primary-fill btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Secondary Select</Label>
            <Input className="form-control-secondary-fill btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Success Select</Label>
            <Input className="form-control-success-fill btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Info Select</Label>
            <Input className="form-control-info-fill btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Warning Select</Label>
            <Input className="form-control-warning-fill btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Danger Select</Label>
            <Input className="form-control-danger-fill btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
          <div>
            <Label className="col-form-label">Inverse Select</Label>
            <Input className="form-control-inverse-fill btn-square" name="select" type="select">
              {OutlineSelect2Options}
            </Input>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FullColoredSelect2;
