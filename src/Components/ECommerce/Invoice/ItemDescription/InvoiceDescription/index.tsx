import { ImagePath, JohanDeo, JohanDeoMailId, ProjectDescription, ProjectDescriptionDetails } from "@/Constant";
import Image from "next/image";
import { Col, Media, Row } from "reactstrap";

const InvoiceDescription = () => {
  return (
    <Row className="invo-profile">
      <Col xl="4">
        <div className="invo-profile-left">
          <Media>
            <div className="media-left">
              <Image width={60} height={60} className="media-object rounded-circle img-60" src={`${ImagePath}/user/1.jpg`} alt="" />
            </div>
            <Media body className="m-l-20">
              <h4 className="media-heading f-w-600">{JohanDeo}</h4>
              <p>
                {JohanDeoMailId}
                <br />
                <span className="digits">555-555-5555</span>
              </p>
            </Media>
          </Media>
        </div>
      </Col>
      <Col xl="8">
        <div id="project" className="text-xl-end">
          <h6>{ProjectDescription}</h6>
          <p>{ProjectDescriptionDetails}</p>
        </div>
      </Col>
    </Row>
  );
};
export default InvoiceDescription;
