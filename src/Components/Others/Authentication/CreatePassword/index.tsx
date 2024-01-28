import { CreateAccount, Done, NewPassword, Password, RememberPassword } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const CreatePassword = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <section>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col xl="12 p-0">
            <div className="login-card1">
              <Form className="theme-form login-form">
                <h4 className="mb-3">Create Your Password</h4>
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
                  <Label>{Password}</Label>
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
                <FormGroup>
                  <Button className="btn-block" color="primary" type="submit">
                    {Done}
                  </Button>
                </FormGroup>
                <p>
                  Don't have account?
                  <Link className="ps-2" href={`/${i18LangStatus}/pages/authentication/register-simpleimg`}>
                    {CreateAccount}
                  </Link>
                </p>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CreatePassword;
