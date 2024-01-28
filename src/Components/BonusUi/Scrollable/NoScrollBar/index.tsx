import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, NoScrollbar } from "@/Constant";
import Image from "next/image";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col } from "reactstrap";

const NoScrollBar = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={NoScrollbar} />
        <CardBody>
          <ScrollBar className="scrollbar-container vertical-scroll ps" style={{ height: "460px" }}>
            <div>
              <Image src={`${ImagePath}/banner/1.jpg`} alt="banner" height={460} width={670} />
            </div>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NoScrollBar;
