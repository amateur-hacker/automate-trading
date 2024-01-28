import { AboutMeData } from "@/Data/BonusUi/Tour";
import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";

const AboutMe = () => {
  const [isShow, setIsShow] = useState(true);
  const toggleClick = () => {
    setIsShow(!isShow);
  };

  return (
    <Col xl="12">
      <Card data-intro="This is your Your detail" className="step4">
        <CardHeader>
          <h5 className="p-0">
            <Button className="btn-link ps-0" color="transperant" onClick={toggleClick}>
              About me
            </Button>
          </h5>
        </CardHeader>
        <div className={`collapse ${isShow && "show"}`} id="collapseicon2" aria-labelledby="collapseicon2" data-parent="#accordion">
          <CardBody className="post-about">
            <ul>
              {AboutMeData.map((item, i) => (
                <li key={i}>
                  <div className="icon">{item.icon}</div>
                  <div>
                    <h5>{item.designation}</h5>
                    <p>{item.place}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="social-network theme-form">
              <span className="f-w-600">Social Networks</span>
              <Button className="social-btn btn-fb mb-2 text-center" color="transperent">
                <i className="fa fa-facebook m-r-5"></i>Facebook
              </Button>
              <Button className="social-btn btn-twitter mb-2 text-center" color="transperent">
                <i className="fa fa-twitter m-r-5"></i>Twitter
              </Button>
              <Button className="social-btn btn-google text-center" color="transperent">
                <i className="fa fa-dribbble m-r-5"></i>Dribbble
              </Button>
            </div>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};

export default AboutMe;
