import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import AnalogClock from "analog-clock-react";
import WeatherWidgets from "./Weather";

const ClockAndWeather = () => {
  const date = { date: new Date() };
  const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  const d = new Date();
  const ShowDate = month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  const options = {
    width: "180px",
    border: true,
    borderColor: "#2e2e2e",
    centerColor: "#459cff",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#6362e7",
      minute: "#ffc500",
      hour: "#ffffff",
    },
  };
  return (
    <>
      <Col xl="6" sm="12" className="box-col-12 xl-100">
        <Card className="o-hidden">
          <div className="weather-widget-two">
            <CardBody>
              <Row>
                <Col xl="5" md="6">
                  <div className="mobile-clock-widget">
                    <div>
                      <AnalogClock {...options} />
                      <div id="date" className="date f-24 mb-2">
                        <span>{ShowDate}</span>
                        <p className="m-0 f-14 text-light">Mumbai, India</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <WeatherWidgets />
              </Row>
            </CardBody>
          </div>
        </Card>
      </Col>
    </>
  );
};
export default ClockAndWeather;
