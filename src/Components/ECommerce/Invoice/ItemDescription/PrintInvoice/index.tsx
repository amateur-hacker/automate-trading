import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col, Form, Input, Row } from "reactstrap";

const PrintInvoice = () => {
  return (
    <Row className="mt-3">
      <Col md="8">
        <div>
          <p className="legal">
            <strong>Thank you for your business!</strong> Payment is expected within 31 days; please process this invoice within that time. There will be a 5% interest charge per month on late invoices.
          </p>
        </div>
      </Col>
      <Col md="4">
        <Form className="text-end invo-pal">
          <Image  src={`${ImagePath}/other-images/paypal.png`} height={32} width={170} alt="PayPal - The safer, easier way to pay online!" />
        </Form>
      </Col>
    </Row>
  );
};
export default PrintInvoice;
