import { Href, ImagePath } from "@/Constant";
import { EmailContainButtonsData, EmailContainImageData } from "@/Data/Email";
import Image from "next/image";
import { Button, Card, Col, Input, Media, Row } from "reactstrap";

const EmailContain = () => {
  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <div className="email-profile">
          <div className="email-right-aside">
            <div className="email-body">
              <div className="email-content">
                <div className="email-top">
                  <Row>
                    <Col xl="12">
                      <Media>
                        <Image height={50} width={50} src={`${ImagePath}/user/user.png`} alt="" className="me-3 rounded-circle" />
                        <Media body>
                          <h6>MARKJENCO</h6>
                          <p>Mattis luctus.Donec nisi diam text.</p>
                        </Media>
                      </Media>
                    </Col>
                  </Row>
                </div>
                <div className="email-wrapper">
                  <div className="emailread-group">
                    <div className="read-group">
                      <p>Hello</p>
                      <p>Dear Sir Good Morning,</p>
                    </div>
                    <div className="read-group">
                      <h5>Elementum varius nisi vel tempus. Donec eleifend egestas viverra.</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non diam facilisis, commodo libero et, commodo sapien. Pellentesque sollicitudin massa sagittis dolor facilisis, sit amet vulputate nunc molestie. Pellentesque maximus nibh id luctus porta. Ut consectetur dui nec nulla mattis luctus. Donec nisi diam, congue vitae felis at, ullamcorper bibendum tortor. Vestibulum pellentesque felis felis. Etiam ac tortor felis. </p>
                      <p className="m-t-10">In elementum varius nisi vel tempus. Donec eleifend egestas viverra. Donec dapibus sollicitudin blandit. Donec scelerisque purus sit amet feugiat efficitur. Quisque feugiat semper sapien vel hendrerit. Mauris lacus felis, consequat nec pellentesque viverra, venenatis a lorem. Sed urna</p>
                    </div>
                  </div>
                  <div className="emailread-group">
                    <i className="icofont icofont-clip"></i> ATTACHMENTS
                    <a className="text-muted text-end right-download font-primary f-w-600" href={Href}>
                      <i className="fa fa-long-arrow-down me-2"></i>Download All
                    </a>
                    <div className="clearfix"></div>
                    <div className="attachment">
                      <ul className="simple-list flex-row">
                        {EmailContainImageData.map((item, i) => (
                          <li key={i}>
                            <Image height={100} width={100} className="img-fluid" src={`${ImagePath}/email/${item}.jpg`} alt="" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="emailread-group">
                    <Input type="textarea" rows={4} cols={50} placeholder="write about your notes"></Input>
                    <div className="action-wrapper">
                      <ul className="simple-list actions flex-row">
                        {EmailContainButtonsData.map((item, i) => (
                          <li>
                            <Button key={i} color="primary" href={Href}>
                              <i className="fa fa-reply me-2"></i>
                              {item}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default EmailContain;
