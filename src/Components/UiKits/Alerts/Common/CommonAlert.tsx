import { CommonAlertProps } from "@/Type/UiKits";
import { Fragment, useState } from "react";
import { Alert, Button } from "reactstrap";

const CommonAlert = ({ item, btnText }: CommonAlertProps) => {
  const [Open, setOpen] = useState(true);
  const Toggle = () => setOpen(!Open);
  return (
    <Fragment>
      {btnText ? (
        <Alert className="alert-dismissible" color={item.alertColor} isOpen={Open} target={`Alert- + ${item.id}`}>
          {item.icon}
          <p>
            {"Your time Over after"} <b>{"5"}</b> {"minute"}
            <Button close color="transparent" id="Alert-1" onClick={Toggle}>
              {<span className={item.divClass}>{"dismiss"}</span>}
            </Button>
          </p>
        </Alert>
      ) : (
        <Alert className="alert-dismissible" color={item.alertColor} isOpen={Open} target={`Alert- + ${item.id}`} closeButton={true} id={`Alert- + ${item.id}`} onClick={Toggle} divClass={item.divClass}>
          {item.icon}
          <p>
            {item.alertText}
            <Button close color="transparent" id="Alert-1" onClick={Toggle}></Button>
          </p>
        </Alert>
      )}
    </Fragment>
  );
};

export default CommonAlert;
