import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomAutoclose } from "@/Constant";
import { AutoCloseNotifyData } from "@/Data/BonusUi/BootstrapNotify";
import { toast } from "react-toastify";
import { Button, Card, CardBody, Col } from "reactstrap";

const AutoCloseNotify = () => {
  const autoCloseToaster = (toastname: string) => {
    switch (toastname) {
      case "autoclose1Toast":
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 15000,
        });
        break;
      case "autoclose2Toast":
        toast.info("Info Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        break;
      case "autoclose3Toast":
        toast.warn("Warning Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1000,
        });
        break;
      case "autoclose4Toast":
        toast.error("Danger Notification !", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 500,
        });
        break;
      default:
        break;
    }
  };
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={CustomAutoclose} />
        <CardBody>
          <div className="btn-showcase">
            <Button color="success" onClick={(e) => autoCloseToaster("autoclose1Toast")}>
              Auto Close In 15000 Sec
            </Button>
            {AutoCloseNotifyData.map((item, i) => (
              <Button key={i} color={item.color} onClick={(e) => autoCloseToaster(item.name)}>
                {item.text}
              </Button>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AutoCloseNotify;
