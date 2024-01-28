import { CreatedByMe, Href, Print } from "@/Constant";
import { useRef } from "react";
import { Printer } from "react-feather";
import ReactToPrint from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import CreatedByMeClass from "../CreatedByMe";

const ListOfTask = () => {
  const componentRef = useRef();
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h5 className="mb-0">{CreatedByMe}</h5>
        <ReactToPrint
          trigger={() => (
            <a href={Href}>
              <Printer className="me-2" />
              {Print}
            </a>
          )}
          content={() => componentRef.current || null}
        />
      </CardHeader>
      <CreatedByMeClass />
    </Card>
  );
};

export default ListOfTask;
