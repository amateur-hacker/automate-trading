import React from 'react';
import { Card, CardBody, Col } from 'reactstrap';

import ModalButton from './Common/ModalButton';
import { VaryingModalContent } from '@/Constant'
import CommonCardHeader from '@/CommonComponents/CommonCardHeader';

const VaryingContent = () => {
  return (
    <Col sm='12'>
      <Card>
        <CommonCardHeader heading={VaryingModalContent}/>
        <CardBody className='btn-showcase'>
          <ModalButton btnText='Open modal for @mdo' defaultVal='@fat' />
          <ModalButton btnText='Open modal for @fat' defaultVal='@Mat' />
          <ModalButton btnText='Open modal for @getbootstrap' defaultVal='@getbootstrap' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default VaryingContent;
