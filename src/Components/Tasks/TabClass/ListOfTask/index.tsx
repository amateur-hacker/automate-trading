import { CreatedByMe, Href, Print } from "@/Constant";
import { useRef } from "react";
import { Printer } from "react-feather";
import ReactToPrint from "react-to-print";
import { Card, CardHeader } from "reactstrap";
import CreatedByMeClass from "../CreatedByMe";
import { SearchBar } from "../SearchBar";

const ListOfTask = () => {
  const componentRef = useRef();
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex justify-content-between">
        {/* <h5 className="mb-0"></h5> */}
        <SearchBar />
        {/* <ReactToPrint
          trigger={() => (
            <a href={Href}>
              <Printer className="me-2" />
              {Print}
            </a>
          )}
          content={() => componentRef.current || null}
        /> */}
      </CardHeader>
      <CreatedByMeClass />
    </Card>
  );
};

export default ListOfTask;
