import CommonHeaderClass from '@/CommonComponents/CommonHeaderClass'
import { VerticalAlign } from '@/Constant'
import React from 'react'

const VerticalAlignCard = () => {
  return (
    <CommonHeaderClass title={VerticalAlign}>{`.baseline {
        vertical-align: baseline;
        }
        .sub {
        vertical-align: sub;
        }
        .super {
        vertical-align: super;
        }
        .top {
        vertical-align: top;
        }
        .text-top {
        vertical-align: text-top;
        }
        .middle {
        vertical-align: middle;
        }
        .bottom {
        vertical-align: bottom;
        }
        .text-bottom {
        vertical-align: text-bottom;
        }
        .initial {
        vertical-align: initial;
        }
        .inherit {
        vertical-align: inherit;
        }
      `}
    </CommonHeaderClass>
  )
}

export default VerticalAlignCard