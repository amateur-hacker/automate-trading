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

const ExampleTable = async () => {
  const time = await getTime();
  return (
    <div>
      <h2 className="bg-black">{time.datetime}</h2>
    </div>
  );
};

export default ExampleTable;
