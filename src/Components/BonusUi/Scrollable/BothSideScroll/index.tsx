import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BothSideScroll, ImagePath } from "@/Constant";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col } from "reactstrap";

const BothSideScrollbar = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={BothSideScroll} />
        <CardBody>
          <ScrollBar className="vertical-scroll both-side-scroll" style={{ width: "100%", height: 460 }}>
            <Image alt="banner" height={600} width={800} src={`${ImagePath}/banner/3.jpg`} />
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BothSideScrollbar;
