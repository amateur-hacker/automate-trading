import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Select2 } from "@/Constant";
import { Options, Options2, Options3, Options4 } from "@/Data/Forms/FormWidgets";
import { useState } from "react";
import Select from "react-select";
import { Button, Card, CardBody, Col, Label } from "reactstrap";

const Select2Card = () => {
  const [enable, setEnable] = useState(false);
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader heading={Select2} />
        <CardBody>
          <div className="mb-2">
            <Label className="col-form-label">Default Placeholder</Label>
            <Col sm="12">
              <Select options={Options} className="js-example-basic-single" isMulti />
            </Col>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Select2 single select</Label>
            <Col sm="12">
              <Select options={Options2} className="js-example-basic-single" />
            </Col>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Select2 multi select</Label>
            <Col sm="12">
              <Select options={Options} className="js-example-basic-single" isMulti />
            </Col>
          </div>
          <div className="mb-2">
            <Label className="col-form-label">RTL support</Label>
            <Select isRtl={true} isMulti options={Options} />
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Limiting The Number Of Selections</Label>
            <Select isMulti options={Options} />
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Disabled Results</Label>
            <Select options={Options3} />
          </div>
          <div className="mb-2">
            <Label className="col-form-label">Hiding The Search Box</Label>
            <Select options={Options4} isMulti />
          </div>
          <div className="mt-3">
            <Label className="col-form-label me-2">Enable-Disable</Label>
            <Select isDisabled={enable} options={Options} />
            <Button className="js-programmatic-enable mt-2 me-2" color="primary" onClick={() => setEnable(false)}>
              Enable
            </Button>
            <Button className="js-programmatic-disable mt-2" color="secondary" onClick={() => setEnable(true)}>
              Disable
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Select2Card;
