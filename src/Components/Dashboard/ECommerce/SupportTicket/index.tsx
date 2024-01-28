import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Button, Card, CardBody, Col } from "reactstrap";

const SupportTicket = () => {
  return (
    <Col xl="4" md="6" className="dash-xl-50 dash-29 box-col-6">
      <Card className="bg-primary get-support">
        <CardBody>
          <div className="support-sec-img">
            <Image height={180} width={180} className="img-fluid" src={`${ImagePath}/dashboard-2/support-img.png`} alt="" />
          </div>
          <div className="support-detail">
            <h5>Get support 24 hours</h5>
            <p>Check Our new service & feature about sales!</p>
            <Button outline className=" btn-outline-white_color  ">
              Interested?
            </Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SupportTicket;
