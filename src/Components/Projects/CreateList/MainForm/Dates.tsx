import { CreateProjectDateProps } from "@/Type/Projects";
import { Fragment, useState } from "react";
import DatePicker from "react-datepicker";
import { FormGroup, Label } from "reactstrap";

const Dates = ({ StartingDate, EndingDate }: CreateProjectDateProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleStartDate = (date: Date) => {
    setStartDate(date);
  };
  const handleEndDate = (date: Date) => {
    setEndDate(date);
  };
  return (
    <Fragment>
      {StartingDate ? (
        <FormGroup>
          <Label>{StartingDate}</Label>
          <DatePicker className="datepicker-here form-control" selected={startDate} onChange={handleStartDate} />
        </FormGroup>
      ) : (
        <FormGroup>
          <Label>{EndingDate}</Label>
          <DatePicker className="datepicker-here form-control" selected={endDate} endDate={endDate} onChange={handleEndDate} />
        </FormGroup>
      )}
    </Fragment>
  );
};
export default Dates;
