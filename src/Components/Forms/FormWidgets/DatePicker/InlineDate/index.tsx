import { InlineVersion } from '@/Constant';
import { DatePickerInterFace } from '@/Type/Form';
import DatePicker from 'react-datepicker';
import { Col, Label, Row } from 'reactstrap';

const InlineDate = ({ startDate, handleChange }: DatePickerInterFace) => {
  return (
    <Row className='mb-3 g-3'>
     <Col sm="3" className=" col-form-label text-end">
        <Label>{InlineVersion}</Label>
      </Col>
      <Col sm='3'>
        <div className='datepicker-here'>
          <DatePicker className='form-control digits' selected={startDate} onChange={handleChange} inline />
        </div>
      </Col>
    </Row>
  );
};

export default InlineDate;
