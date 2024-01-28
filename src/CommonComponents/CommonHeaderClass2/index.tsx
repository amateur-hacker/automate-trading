import { HeaderClass } from "@/Type/UiKits";
import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";

const CommonHeaderClass = (props: HeaderClass) => {
  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>{props.title}</h5>
      </CardHeader>
      <CardBody >
        <pre className="helper-classes">{props.children}</pre>
      </CardBody>
    </Card>
  );
};

export default CommonHeaderClass;
