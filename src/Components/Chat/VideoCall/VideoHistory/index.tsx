import { Href, ImagePath } from "@/Constant";
import Image from "next/image";
import { User, Video, Volume2 } from "react-feather";
import { Button, Col, Row } from "reactstrap";

const VideoHistory = () => {
  return (
    <div className="chat-history">
      <Row>
        <Col className="text-center pe-0 call-content">
          <div>
            <div className="total-time">
              <h2 className="digits">36 : 56</h2>
            </div>
            <div className="call-icons">
              <ul className="simple-list list-inline flex-row">
                <li className="list-inline-item">
                  <a href={Href}>
                    <Video />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={Href}>
                    <Volume2 />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href={Href}>
                    <User />
                  </a>
                </li>
              </ul>
            </div>
            <Button size="lg" color="danger" className="btn-block">
              END CALL
            </Button>
            <div className="receiver-img">
              <Image src={`${ImagePath}/other-images/receiver-img.jpg`} alt="" height={230} width={230} />
            </div>
          </div>
        </Col>
        <Col sm="6" className="caller-img-sec">
          <div className="caller-img">
            <Image className="img-fluid bg-img-cover" src={`${ImagePath}/other-images/caller.jpg`} alt="" height={650} width={550} />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default VideoHistory;
