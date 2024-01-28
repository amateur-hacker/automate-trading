import { RememberPassword, SignIn, Unlock } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Mail } from "react-feather";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const UnlockUser = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <section>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col className="p-0">
            <div className="login-main">
              <div className="login-card1">
                <Form className="theme-form login-form">
                  <h4>{Unlock}</h4>
                  <FormGroup>
                    <Label className="col-form-label">Enter your Password</Label>
                    <InputGroup>
                      <InputGroupText>
                        <Mail />
                      </InputGroupText>
                      <Input type="password" name="login[password]" required placeholder="*********" />
                      <div className="show-hide">
                        <span className="show"> </span>
                      </div>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" for="checkbox1">
                        {RememberPassword}
                      </Label>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Button className="btn-block" color="primary" disabled>
                      {Unlock}
                    </Button>
                  </FormGroup>
                  <p>
                    Already have an account?
                    <Link className="ms-2" href={`/${i18LangStatus}/dashboard/default`}>
                      {SignIn}
                    </Link>
                  </p>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default UnlockUser;
