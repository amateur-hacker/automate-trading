import { useState } from "react";
import DatePicker from "react-datepicker";
import { Card, CardBody, Col } from "reactstrap";

const Calendar = () => {
  const [date, setDate] = useState<Date | null>(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setDate(date);
  };
  return (
    <Col xl="3" md="12" className="box-col-6">
      <Card>
        <CardBody className="cal-date-widget">
          <div className="cal-datepicker">
            <div className="datepicker-here float-sm-end" data-language="en">
              <DatePicker selected={startDate} onChange={handleChange} inline />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Calendar;
