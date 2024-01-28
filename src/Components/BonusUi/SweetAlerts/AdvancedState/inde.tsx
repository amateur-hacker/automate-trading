import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AdvancedState } from "@/Constant";
import { AdvancedData } from "@/Data/BonusUi/SweetAlert";
import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const AdvancedStateAlerts = () => {
  const [alert, setAlert] = useState(false);
  const DisplayAlert = (name: string) => {
    setAlert(true);
    if (name === "advanceDanger") {
      SweetAlert.fire({
        title: "Are you sure you want to do this?",
        cancelButtonText: "Oh noez!",
        confirmButtonText: "Aww yiss!",
        reverseButtons: true,
        showCancelButton: true,
      });
    }
    if (name === "advanceInfo") {
      SweetAlert.fire({
        title: "Write something here:",
        input: "text",
      }).then((result) => {
        if (result.value) {
          SweetAlert.fire(`You typed: ${result.value}`);
        } else {
          SweetAlert.fire("You typed: null");
        }
      });
    }
    if (name === "advanceWarning") {
      SweetAlert.fire({
        title: "Are you sure you want to do this?",
        cancelButtonText: "Oh noez!",
        confirmButtonText: "Aww yiss!",
        reverseButtons: true,
        showCancelButton: true,
      });
    }
  };
  return (
    <>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={AdvancedState} />
          <CardBody>
            <div className="btn-showcase">
              <Button color="danger" className="sweet-11" onClick={(e) => DisplayAlert("advanceDanger")}>
                Danger
              </Button>
              {AdvancedData.map((item, i) => (
                <Button color={item.color} className={item.class} onClick={(e) => DisplayAlert(item.name)} key={i}>
                  {item.title}
                </Button>
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default AdvancedStateAlerts;
