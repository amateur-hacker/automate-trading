import {
  CreateAccount,
  EmailAddress,
  Password,
  PrivacyPolicy,
  SignIn,
  YourName,
} from "@/Constant";
import Link from "next/link";
import { Lock, Mail, User, Phone } from "react-feather";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
} from "reactstrap";
import MediaIcons from "./MediaIcons";
import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { phoneCode } from "@/utils/phoneNumber";
import Toast from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const SigninForm = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCounryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const numbersArray = Array.from({ length: 10 }, (_, index) => index + 1);

  const LoginUser = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();

      const response: Response = await fetch(
        "https://nextlevelpine.com/nlbweb/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const contentType: string | null = response.headers.get("content-type");
      const wait = (milliseconds: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      if (contentType && contentType.includes("application/json")) {
        const data: any = await response.json();
        console.log("Response Data (JSON):", data);
        if (
          // !Cookies.get("userid") &&
          // !Cookies.get("authtoken") &&
          // data.userId &&
          // data.authToken
          !Cookies.get("userId") &&
          !Cookies.get("authToken") &&
          data.userId &&
          data.authToken
        )
          // {
          //   Cookies.set("userid", data.userId, { expires: 1 });
          //   Cookies.set("authtoken", data.authToken, { expires: 1 });
          // }
          toast("Redirecting ....");
        await wait(1000);
        router.push("/dashboard");
      } else {
        const textData: string = await response.text();
        console.log("Response Data (Text):", textData);
        if (textData.includes("Email ID not found")) {
          toast.error("Email ID not found");
          const emailInput = document.getElementById(
            "email"
          ) as HTMLInputElement;
          emailInput.focus();
          emailInput.scrollIntoView();
        } else {
          toast.error("Incorrect Password");

          const passwordInput = document.getElementById(
            "password"
          ) as HTMLInputElement;
          passwordInput.focus();
          passwordInput.scrollIntoView();
        }
      }
    } catch (error) {
      console.log(`Error coming from loginUser function: ${error.message}`);
    }
  };

  return (
    <Form className="theme-form login-form" onSubmit={LoginUser}>
      <div className="login-header text-center register-header">
        <i className="ri-robot-2-fill ri-2x"></i>
        <h4 className="inline-block">Let&apos;s Automate Trading</h4>
        {/* <h6>Enter your personal details to create account</h6> */}
        <h6>
          Sign in and embark on the adventure! <span className="emoji">😄</span>
        </h6>
      </div>
      {/* <FormGroup>
        <MediaIcons />
      </FormGroup> */}
      <div className="login-social-title">
        <h5>Sign in with Email</h5>
      </div>

      <FormGroup>
        <Label>{EmailAddress}</Label>
        <InputGroup>
          <InputGroupText>
            <Mail />
          </InputGroupText>
          <Input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            placeholder="johndoe@gmail.com"
          />
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>{Password}</Label>
        <InputGroup>
          <InputGroupText>
            <Lock />
          </InputGroupText>
          <Input
            type={showPassword ? "text" : "password"}
            name="login[password]"
            required
            placeholder="*********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div
            className="show-hide"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className={showPassword ? "hide" : "show"}></span>
          </div>
        </InputGroup>
      </FormGroup>

      <FormGroup>
        <div className="checkbox">
          <Input id="checkbox1" type="checkbox" />
          <Label className="text-muted" for="checkbox1">
            Remember me
          </Label>
        </div>
      </FormGroup>
      <FormGroup>
        <Button className="btn-block signup-btn" color="primary" type="submit">
          {SignIn}
        </Button>
      </FormGroup>
      <p>
        Already have an account?
        <Button onClick={() => router.push(`/register`)} className="ms-2">
          {CreateAccount}
        </Button>
      </p>

      <ToastContainer position="top-right" />
    </Form>
  );
};

export default SigninForm;
