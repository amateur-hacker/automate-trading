import { Cancel, Submit } from "@/Constant";
import { CommonCardFooterProps } from "@/Type/Form";
import { Button, CardFooter } from "reactstrap";

const CommonCardFooter = ({ align, color }: CommonCardFooterProps) => {
  return (
    <CardFooter className={align}>
      <Button color="primary" type="submit" className="me-2">
        {Submit}
      </Button>
      <Button color={color ? color : "light"} type="reset">
        {Cancel}
      </Button>
    </CardFooter>
  );
};

export default CommonCardFooter;
