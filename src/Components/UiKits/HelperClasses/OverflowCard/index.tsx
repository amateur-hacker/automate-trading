import React from 'react';
import { Overflow } from '../../../../Constant/index';
import CommonHeaderClass from '@/CommonComponents/CommonHeaderClass2';

const OverflowCard = () => {
  return (
    <CommonHeaderClass title={Overflow}>{`.o-hidden {
        overflow: hidden;
        }
        .o-visible {
        overflow: visible;
        }
        .o-auto {
        overflow: auto;
        }
      `}
    </CommonHeaderClass>
  );
};

export default OverflowCard;