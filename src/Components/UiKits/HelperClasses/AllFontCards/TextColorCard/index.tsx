import CommonHeaderClass from '@/CommonComponents/CommonHeaderClass'
import { TextColorHeading } from '@/Constant'
import React from 'react'

const TextColorCard = () => {
  return (
    <CommonHeaderClass title={TextColorHeading}>{`.font-primary {
        color: #7366ff !important;
        }
        .font-secondary {
        color: #f73164 !important;
        }
        .font-success {
        color: #51bb25 !important;
        }
        .font-danger {
        color: #dc3545 !important;
        }
        .font-info {
        color: #a927f9 !important;
        }
        .font-light {
        color: #f4f4f4 !important;
        }
        .font-dark {
        color: #2c323f !important;
        }
        .font-warning {
        color: #f8d62b !important;
        }
      `}
    </CommonHeaderClass>
  )
}

export default TextColorCard