import { WeatherWidgetsData } from "@/Data/Widgets/General";
import React from "react";
import { Col, Media } from "reactstrap";

const WeatherWidgets = () => {
  return (
    <Col xl="7" md="6">
      <div className="widget-list">
        <ul>
          {WeatherWidgetsData.map((item, i) => (
            <li key={i}>
              <Media>
                {item.icon}
                <Media body className="align-self-center text-white">
                  <h4 className="m-0 f-w-600 num">{item.temperature}</h4>
                </Media>
                <span>{item.country}</span>
              </Media>
            </li>
          ))}
        </ul>
      </div>
    </Col>
  );
};
export default WeatherWidgets;
