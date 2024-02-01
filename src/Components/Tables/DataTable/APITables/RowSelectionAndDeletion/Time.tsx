import React from "react";

const getTime = async () => {
  const response = await fetch(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata",
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return response.json();
};

const Time = async () => {
  const time = await getTime();
  return <div>{time?.datetime}</div>;
};

export default Time;
