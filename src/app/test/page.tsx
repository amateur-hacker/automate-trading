"use client";
import { EmailAddress, ForgotPassword, Href, Password, RememberPassword, SignIn } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { FaceBookSVG, GoogleSVG, InstagramSVG, TwitterSVG } from "@/svgIcons";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { Lock, Mail } from "react-feather";
import { toast } from "react-toastify";
import { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const UserLogin = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [showPassWord, setShowPassWord] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "Test@gmail.com",
    password: "Test@123",
  });
  const { email, password } = formValues;
  const router = useRouter();
  const handleUserValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const formSubmitHandle = (event: FormEvent) => {
    event.preventDefault();
    if (email === "Test@gmail.com" && password === "Test@123") {
      Cookies.set("token", JSON.stringify(true));
      router.push(`${process.env.PUBLIC_URL}/${i18LangStatus}/samplepage`);
      toast.success("login successful");
    } else {
      alert("Please Enter Valid Email Or Password");
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xl="12 p-0">
          <div className="login-card1">
            <Form className="theme-form login-form" onSubmit={formSubmitHandle}>
              <div className="login-header ">
                <h4>Sign In With Simple Login</h4>SAMPLE_DATA
                <h6>Welcome back! Log in to your account.</h6>
              </div>
              <FormGroup>
                <Label>{EmailAddress}</Label>
                <InputGroup>
                  <InputGroupText><Mail /></InputGroupText>
                  <Input name="email" onChange={handleUserValue} value={formValues.email} type="email" required placeholder="Test@gmail.com" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <Label>{Password}</Label>
                <InputGroup>
                  <InputGroupText><Lock /></InputGroupText>
                  <Input type={showPassWord ? "text" : "password"} onChange={handleUserValue} value={formValues.password} name="password" required placeholder="*********" />
                  <div className="show-hide"><span className={showPassWord ? "hide" : "show"} onClick={() => setShowPassWord(!showPassWord)}></span></div>
                </InputGroup>
              </FormGroup>
              <FormGroup className="login-btn">
                <div className="checkbox">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" for="checkbox1">{RememberPassword}</Label>
                </div>
                <a href={Href} className="link">{ForgotPassword}?</a>
              </FormGroup>
              <FormGroup>
                <Button className="btn-block" color="primary" type="submit">{SignIn}</Button>
              </FormGroup>
              <div className="login-social-title"><h5>Sign in with</h5></div>
              <FormGroup>
                <ul className="simple-list login-social flex-row">
                  <li><a href="https://www.google.com/"><GoogleSVG /></a></li>
                  <li><a href="https://twitter.com/"><TwitterSVG /></a></li>
                  <li><a href="https://www.instagram.com/"><InstagramSVG /></a></li>
                  <li><a href="https://www.facebook.com/"><FaceBookSVG /></a></li>
                </ul>
              </FormGroup>
              <p>Don't have account ?<a className="ms-2" href="/register">Create Account</a></p>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
