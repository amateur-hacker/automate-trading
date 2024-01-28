"use client";
import MediaIcons from "@/Components/Others/Authentication/Common/MediaIcons";
import { EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Lock, Mail } from "react-feather";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const LoginSimple = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [showPassWord, setShowPassWord] = useState(false);
  const router = useRouter()

  return (
    <Container fluid>
      <Row>
        <Col xl="12 p-0">
          <div className="login-card1">
            <Form className="theme-form login-form">
              <div className="login-header ">
                <h4>Sign In With Simple Login</h4>
                <h6>Welcome back! Log in to your account.</h6>
              </div>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <InputGroup>
                  <InputGroupText>
                    <Mail />
                  </InputGroupText>
                  <Input name="email" type="email" required placeholder="Test@gmail.com" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>{Password}</Label>
                <InputGroup>
                  <InputGroupText>
                    <Lock />
                  </InputGroupText>
                  <Input type={showPassWord ? "text" : "password"} name="password" required placeholder="*********" />
                  <div className="show-hide">
                    <span className={showPassWord ? "hide" : "show"} onClick={() => setShowPassWord(!showPassWord)}></span>
                  </div>
                </InputGroup>
              </FormGroup>
              <FormGroup className="login-btn">
                <div className="checkbox">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" for="checkbox1">
                    {RememberPassword}
                  </Label>
                </div>
                <a href={Href} className="link">
                  {ForgotPassword}?
                </a>
              </FormGroup>
              <FormGroup>
                <Button className="btn-block" color="primary" type="submit" onClick={()=>router.push(`/${i18LangStatus}/dashboard/default`)}>
                  {SignIn}
                </Button>
              </FormGroup>
              <div className="login-social-title">
                <h5>Sign in with</h5>{" "}
              </div>
              <FormGroup>
                <MediaIcons />
              </FormGroup>
              <p>
                Don't have account ?
                <a className="ms-2" href={Href}>
                  Create Account
                </a>
              </p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSimple;
