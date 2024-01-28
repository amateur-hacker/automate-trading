import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import {  CustomDirections, TopCenter } from "@/Constant";
import React from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { toast } from "react-toastify";
import { CustomDirectionsNotifyData } from "@/Data/BonusUi/BootstrapNotify";

const CustomDirectionNotify = () => {
  const directionToaster = (toastname: string) => {
    switch (toastname) {
      case "directionsSuccessToast":
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_CENTER,
        });
        break;
      case "directionsInfoToast":
        toast.info("Info Notification !", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        break;
      case "directionsWarningToast":
        toast.warn("Warning Notification !", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        break;
      case "directionsDangerToast":
        toast.error("Danger Notification !", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        break;
      default:
        break;
    }
  };
  return (
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={CustomDirections} />
          <CardBody>
            <div className="btn-showcase">
              <Button  color="success" onClick={() => directionToaster("directionsSuccessToast")}>
                {TopCenter}
              </Button>
              {CustomDirectionsNotifyData.map((item, i) => (
                <Button key={i}  color={item.color} onClick={() => directionToaster(item.name)}>
                  {item.text}
                </Button>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
  );
};

export default CustomDirectionNotify;
