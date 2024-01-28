import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import CashOnDelivery from "./COD";
import CreditCards from "./CreditCard";
import DebitCards from "./DebitCard";
import EMIs from "./EMI";
import NetBankings from "./NetBanking";

const PaymentDetails = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Payment Details" parent="ECommerce" />
      <Container fluid className="credit-card payment-details">
        <Row>
          <CreditCards />
          <DebitCards />
          <CashOnDelivery />
          <EMIs />
          <NetBankings />
        </Row>
      </Container>
    </>
  );
};

export default PaymentDetails;
