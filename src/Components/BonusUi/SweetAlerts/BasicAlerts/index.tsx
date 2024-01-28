import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicExamples } from "@/Constant";
import { BasicSweetAlertData } from "@/Data/BonusUi/SweetAlert";
import { Fragment, useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";

const BasicAlerts = () => {
  const [alert, setAlert] = useState(false);

  const DisplayAlert = (name: string) => {
    setAlert(true);
    if (name === "basic") {
      SweetAlert.fire({ title: "Hello world!" });
    }
    if (name === "basicTitleAlert") {
      SweetAlert.fire({ title: "Heres the title!", text: "...and heres the text!" });
    }
    if (name === "basicSuccessAlert") {
      SweetAlert.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "info",
      });
    }
    if (name === "basicInfoAlert") {
      SweetAlert.fire({
        title: "Click on either the button or outside the modal.",
      }).then((result) => {
        if (result.value) {
          SweetAlert.fire(`The returned value is: ${result.value}`);
        } else {
          SweetAlert.fire("The returned value is: null");
        }
      });
    }
    if (name === "basicWarningAlert") {
      SweetAlert.fire({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "cancel",
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
        } else {
          SweetAlert.fire("Your imaginary file is safe!");
        }
      });
    }
  };

  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={BasicExamples} />
          <CardBody>
            <div className="btn-showcase">
              <Button color="primary" className="sweet-1" onClick={() => DisplayAlert("basic")}>
                Basic
              </Button>
              {BasicSweetAlertData.map((item) => (
                <Button color={item.color} className={item.class} onClick={() => DisplayAlert(item.name)} key={item.id}>
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

export default BasicAlerts;
