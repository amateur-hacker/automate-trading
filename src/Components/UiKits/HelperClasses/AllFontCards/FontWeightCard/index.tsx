import CommonHeaderClass from '@/CommonComponents/CommonHeaderClass2'
import { FontWeight } from '@/Constant'
import React from 'react'

const FontWeightCard = () => {
  return (
    <CommonHeaderClass title={FontWeight}>{`.f-w-100 {
        font-weight: 100;
        }
        .f-w-300 {
        font-weight: 300;
        }
        .f-w-400 {
        font-weight: 400;
        }
        .f-w-600 {
        font-weight: 600;
        }
        .f-w-700 {
        font-weight: 700;
        }
        .f-w-900 {
        font-weight: 900;
        }
    `}
    </CommonHeaderClass >
  )
}

export default FontWeightCard