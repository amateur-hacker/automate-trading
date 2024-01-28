import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Tooltips } from "@/Constant";
import { CustomToolTipFormSubHeading } from "@/Data/Forms/FormControl";
import { Card, CardBody } from "reactstrap";
import ToolTipForm from "./ToolTipForm";

const CustomToolTipForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={Tooltips} subHeading={CustomToolTipFormSubHeading} />
      <CardBody>
        <ToolTipForm />
      </CardBody>
    </Card>
  );
};

export default CustomToolTipForm;
