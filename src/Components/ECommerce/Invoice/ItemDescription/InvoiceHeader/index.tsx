import { ImagePath, InvoiceHash, PaymentDue } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import { Col, Media, Row } from "reactstrap";

const InvoiceHeader = () => {
  const{i18LangStatus} = useAppSelector((store)=> store.langSlice)

  return (
    <Row className="invo-header">
      <Col sm="6">
        <Media>
          <div className="media-left">
            <Link href={`/${i18LangStatus}/dashboard/default`}>
              <Image className="media-object img-60" height={60} width={60} src={`${ImagePath}/logo/logo-icon.png`} alt="" />
            </Link>
          </div>
          <Media body className="m-l-20">
            <h4 className="media-heading f-w-600">Zeta</h4>
            <p>
              hello@Zeta.in
              <br />
              <span className="digits">{"289-335-6503"}</span>
            </p>
          </Media>
        </Media>
      </Col>
      <Col sm="6">
        <div className="text-md-end text-xs-center">
          <h3>
            {InvoiceHash}
            <span className="digits counter">1069</span>
          </h3>
          <p>
            Issued In Jan
            <span className="digits"> 27, 2023</span>
            <br />
            {PaymentDue} <span className="digits"> 27, 2023</span>
          </p>
        </div>
      </Col>
    </Row>
  );
};
export default InvoiceHeader;
