import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AlertState } from "@/Constant";
import { SweetAlertData } from "@/Data/BonusUi/SweetAlert";
import { Fragment } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const StateAlerts = () => {
  const DisplayAlert = (name: string) => {
    if (name === "alertSuccess") {
      SweetAlert.fire({ title: "Good job!", text: "You clicked the button!", icon: "success" });
    }
    if (name === "alertDanger") {
      SweetAlert.fire({ title: "Good job!", text: "You clicked the button!", icon: "error" });
    }
    if (name === "alertInfo") {
      SweetAlert.fire({ title: "Good job!", text: "You clicked the button!", icon: "info" });
    }
    if (name === "alertWarning") {
      SweetAlert.fire({ title: "Good job!", text: "You clicked the button!", icon: "warning" });
    }
  };
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={AlertState} />
          <CardBody>
            <div className="btn-showcase">
              <Button color="success" className="sweet-8" onClick={() => DisplayAlert("alertSuccess")}>
                Success
              </Button>
              {SweetAlertData.map((item, i) => (
                <Button color={item.color} className={item.class} onClick={() => DisplayAlert(item.name)} key={i}>
                  {item.title}
                </Button>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StateAlerts;
