import { Done, SignIn } from "@/Constant";
import Link from "next/link";
import { Button, Col, Container, Form, FormGroup, Row } from "reactstrap";
import CreatePasswordSection from "./CreatePassSection";
import MobileAndOtp from "./MobileAndOtp";
import { useAppSelector } from "@/Redux/Hooks";

const ForgetPassword = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <section>
      <Container className="p-0" fluid>
        <Row className="m-0">
          <Col className="p-0">
            <div className="login-main">
              <div className="login-card1">
                <Form className="theme-form login-form">
                  <h4 className="mb-3">Reset Your Password</h4>
                  <MobileAndOtp />
                  <h6>Create Your Password</h6>
                  <CreatePasswordSection />
                  <FormGroup>
                    <Button color="primary" className=" btn-block" type="submit">
                      {Done}
                    </Button>
                  </FormGroup>
                  <p>
                    Already have an password?
                    <Link href={`${i18LangStatus}/dashboard/default`}>{SignIn}</Link>
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

export default ForgetPassword;
