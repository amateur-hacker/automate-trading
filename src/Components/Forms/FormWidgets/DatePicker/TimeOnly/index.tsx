import { SelectTimeOnly } from '@/Constant';
import { DatePickerInterFace } from '@/Type/Form';
import DatePicker from 'react-datepicker';
import { Col, Label, Row } from 'reactstrap';

const TimeOnly = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className="mb-3 g-3">
      <Col sm="3" className=" col-form-label text-end">
        <Label>{SelectTimeOnly}</Label>
      </Col>
      <Col xl="5" sm="9">
        <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
      </Col>
    </Row>
  );
};

export default TimeOnly;
