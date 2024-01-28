import { CommonFormGroupProps } from "@/Type/Form";
import { Col,FormGroup, Input, Label } from "reactstrap";

const CommonFormGroup = (props: CommonFormGroupProps) => {
  return (
    <FormGroup className="row">
      <Label className={`col-sm-3 col-form-label ${props.labelClass} `}>{props.label}</Label>
      <Col sm={props.ColSm}>
        <Input className={props.InputClass && props.InputClass} type={props.InputType} placeholder={props.placeholder} defaultValue={props.defaultValue && props.defaultValue} id={props.id && props.id} maxLength={props.maxLength && props.maxLength} style={{ height: props.inlineStyle && props.inlineStyle }} />
      </Col>
    </FormGroup>
  );
};

export default CommonFormGroup;
