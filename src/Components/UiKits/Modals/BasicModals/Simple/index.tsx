import React, { Fragment, useState } from 'react';
import {  Modal, Simple } from '../../../../../Constant';
import { Button } from 'reactstrap';
import CommonModal from '@/CommonComponents/CommonModal';

const BasicBtn = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Button color='primary' onClick={toggle}>
        {Simple}
      </Button>
      <CommonModal isOpen={modal} title={Modal} toggler={toggle}>
        ....
      </CommonModal>
    </Fragment>
  );
};

export default BasicBtn;
