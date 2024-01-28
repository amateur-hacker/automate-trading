import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import RegisterForm from "../Common/RegisterForm";

const Register = () => {
  return (
    <section>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col
            xl="7"
            className="p-0"
            style={{
              backgroundImage: `url(${ImagePath}/trader.jpeg)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "top",
              display: "block",
            }}
          ></Col>
          <Col xl="5" className="p-0">
            <div className="login-card1">
              <RegisterForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
