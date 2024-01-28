import { CreateAccount, EmailAddress, ForgotPassword, Login, Password, RememberPassword, SignIn } from "@/Constant";
import Link from "next/link";
import { Lock, Mail } from "react-feather";
import { Button, Form, FormGroup, Input, InputGroup, InputGroupText, Label } from "reactstrap";
import MediaIcons from "./MediaIcons";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/Redux/Hooks";

const LoginForm = () => {
  const router = useRouter();
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Form className="theme-form login-form">
      <div className="login-header text-center">
        <h4>{Login}</h4>
        <h6>Welcome back! Log in to your account.</h6>
      </div>
      <FormGroup>
        <MediaIcons />
      </FormGroup>
      <div className="login-social-title">
        <h5>Sign in with Email</h5>
      </div>
      <FormGroup>
        <Label>{EmailAddress}</Label>
        <InputGroup>
          <InputGroupText>
            <Mail />
          </InputGroupText>
          <Input type="email" required placeholder="Test@gmail.com" />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>{Password}</Label>
        <InputGroup>
          <InputGroupText>
            <Lock />
          </InputGroupText>
          <Input type="password" name="login[password]" required placeholder="*********" />
          <div className="show-hide">
            <span className="show"></span>
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
        <Link href="/pages/authentication/forgetpwd" className="link">
          {ForgotPassword}?
        </Link>
      </FormGroup>
      <FormGroup>
        <Button className="btn-block" color="primary" type="submit" onClick={() => router.push(`/${i18LangStatus}/dashboard/default`)}>
          {SignIn}
        </Button>
      </FormGroup>
      <p>
        Don't have account?
        <Link href="/pages/authentication/create-pwd" className="ms-2">
          {CreateAccount}
        </Link>
      </p>
    </Form>
  );
};

export default LoginForm;
