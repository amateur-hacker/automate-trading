import { NewPassword, RememberPassword, RetypePassword } from "@/Constant";
import { FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";

const CreatePasswordSection = () => {
  return (
    <>
      <FormGroup>
        <Label>{NewPassword}</Label>
        <InputGroup>
          <InputGroupText>
            <i className="icon-lock"></i>
          </InputGroupText>
          <Input type="password" name="login[password]" required placeholder="*********" />
          <div className="show-hide">
            <span className="show"></span>
          </div>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>{RetypePassword}</Label>
        <InputGroup>
          <InputGroupText>
            <i className="icon-lock"></i>
          </InputGroupText>
          <Input type="password" name="login[password]" required placeholder="*********" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <div className="checkbox">
          <Input id="checkbox1" type="checkbox" />
          <Label className="text-muted" for="checkbox1">
            {RememberPassword}
          </Label>
        </div>
      </FormGroup>
    </>
  );
};

export default CreatePasswordSection;
