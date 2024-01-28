import { NoDataFound } from "@/Constant";
import { NoDataFoundProps } from "@/Type/Dashboard";
import { Card, CardBody, CardHeader } from "reactstrap";

const NoDataFoundClass = ({ title }: NoDataFoundProps) => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h5>{title}</h5>
        <span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
      </CardHeader>
      <CardBody>
        <p>{NoDataFound} </p>
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
