import { TermsAndConditions } from '@/Constant';
import { FormGroup, Input, Label } from 'reactstrap';

const CheckBoxBrowserForm = () => {
  return (
    <FormGroup>
      <div className='form-check'>
        <div className='checkbox p-0'>
          <Input className='form-check-input' id='invalidCheck2' type='checkbox' required />
          <Label className='form-check-label' htmlFor='invalidCheck2'>
            {TermsAndConditions}
          </Label>
        </div>
      </div>
    </FormGroup>
  );
};

export default CheckBoxBrowserForm;
