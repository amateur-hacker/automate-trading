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

const RegisterForm = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCounryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const numbersArray = Array.from({ length: 10 }, (_, index) => index + 1);

  const registerUser = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    try {
      e.preventDefault();
      const response = await fetch(
        "https://nextlevelpine.com/nlbweb/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
            email: email,
            phone: phoneNumber,
            code: countryCode,
          }),
        }
      );

      const data = await response.json();
      if (data.message.includes("email already exists")) {
        toast.error("Email Already Exist");
        const emailInput = document.getElementById("email") as HTMLInputElement;
        emailInput.focus();
        emailInput.scrollIntoView();
        return;
      }
      const wait = (milliseconds: number): Promise<void> => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
      };

      await toast.promise(wait(1500), {
        pending: "Signing up",
        success: "Signup Successfully 👌",
        error: "Error While Signing up 🤯",
      });

      router.push("/login");
    } catch (error) {
      console.log(`Error coming from registerUser function: ${error.message}`);
    }
  };

  return (
    <Form className="theme-form login-form" onSubmit={registerUser}>
      <div className="login-header text-center register-header">
        <i className="ri-robot-2-fill ri-2x"></i>
        <h4 className="inline-block">Let&apos;s Automate Trading</h4>
        {/* <h6>Enter your personal details to create account</h6> */}
        <h6>Sign in to your account and kick off your trading journey </h6>
      </div>
      {/* <FormGroup>
        <MediaIcons />
      </FormGroup> */}
      <div className="login-social-title">
        <h5>Sign up with Email</h5>
      </div>
      <FormGroup>
        <Label>Username</Label>
        <InputGroup>
          <InputGroupText>
            <User />
          </InputGroupText>
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            placeholder="johndoe"
          />
        </InputGroup>
      </FormGroup>
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
            <span className="show"></span>
          </div>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <Label>Number</Label>

        <div className="flex">
          <InputGroup className="flex-1">
            <InputGroupText>
              <Phone />
            </InputGroupText>
            <Input
              className="number-input"
              type="text"
              min={10}
              required
              placeholder="1234567890"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
            />
          </InputGroup>

          <div className="flex">
            <select
              defaultValue="+91"
              name=""
              id=""
              size={0}
              className="h-full"
              onChange={(e) => setCounryCode(e.target.value)}
              value={countryCode}
            >
              {phoneCode.map((code, index) => (
                <option key={index} value={code} className="">
                  +{code}
                </option>
              ))}
            </select>
          </div>
        </div>
      </FormGroup>

      <FormGroup>
        <div className="checkbox">
          <Input id="checkbox1" type="checkbox" required />
          <Label className="text-muted" for="checkbox1">
            Agree with <span>{PrivacyPolicy}</span>
          </Label>
        </div>
      </FormGroup>
      <FormGroup>
        <Button className="btn-block signup-btn" color="primary" type="submit">
          {CreateAccount}
        </Button>
      </FormGroup>
      <p>
        Already have an account?
        <Button onClick={() => router.push(`/login`)} className="ms-2">
          {SignIn}
        </Button>
      </p>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        newestOnTop={false}
        pauseOnHover={false}
        theme="dark"
      />
    </Form>
  );
};

export default RegisterForm;
