declare module "analog-clock-react" {
  import React, { ReactNode } from "react";

  interface AnalogClockOptions {
    width?: string;
    border?: boolean;
    borderColor?: string;
    centerColor?: string;
    centerBorderColor?: string;
    handColors?: {
      second?: string;
      minute?: string;
      hour?: string;
    };
  }

  interface AnalogClockProps extends AnalogClockOptions {
    [key: string]: any;
    renderCenter?: () => ReactNode;
  }

  const AnalogClock: React.FC<AnalogClockProps>;

  export default AnalogClock;
}
