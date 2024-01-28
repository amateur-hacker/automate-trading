import { Col, Container, Row } from "reactstrap";
import LoginForm from "../Common/LogInForm";

const SweetalertLogin = () => {
  return (
    <section>
      <Container className="p-0" fluid>
        <Row>
          <Col xl="12">
            <div className="login-card1">
              <LoginForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SweetalertLogin;
