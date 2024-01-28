import { CountdownProps } from "@/Type/Dashboard";
import { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountdownData = () => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const isMounted = setTimeout(function () {
      setStyle({ style: { display: "none" } });
    }, 1000);
    return () => {
      clearTimeout(isMounted);
    };
  }, []);
  const CompletionList = () => <span>{"You are good to go!"}</span>;

  const renderer = ({ days, hours, minutes, seconds, completed }: CountdownProps) => {
    if (completed) {
      return <CompletionList />;
    } else {
      return (
        <div>
          <ul className=" flex-row timer-sec countdown">
            <li>
              <h6 className="font-primary m-0 days">{days} </h6>
              <span className="font-dark">Days </span>
            </li>
            <li>
              <h6 className="font-primary m-0 hours">{hours} </h6>
              <span className="font-dark">Hours</span>
            </li>
            <li>
              <h6 className="font-primary m-0 minutes"> {minutes}</h6>
              <span className="font-dark">Min</span>
            </li>
            <li>
              <h6 className="font-primary m-0 seconds">{seconds} </h6>
              <span className="font-dark">Sec</span>
            </li>
          </ul>
        </div>
      );
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var countdown = new Date(year, month, day + 10).getTime();

  return <Countdown date={countdown} renderer={renderer} />;
};

export default CountdownData;
