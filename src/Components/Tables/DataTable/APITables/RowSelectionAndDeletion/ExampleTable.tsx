import { cookies } from "next/headers";
import DataTable from "react-data-table-component";
import DataTable1 from "./DataTable1";

const getWebHookLogs = async () => {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get("authToken")?.value;
    console.log(authToken);
    const response = await fetch("https://nextlevelpine.com/get-webhook-logs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken ?? "",
      },
      next: {
        revalidate: 0,
      },
    });
    const apiData = await response.json();
    const transformedData = apiData["$values"].map((item: any) => ({
      s_No: item.sNo !== null ? item.sNo : "null",
      request_Id: item.request_Id !== null ? item.request_Id : "null",
      sub_Id: item.sub_Id !== null ? item.sub_Id : "null",
      broker_Name: item.broker_Name !== null ? item.broker_Name : "null",
      broker_Type: item.broker_Type !== null ? item.broker_Type : "null",
      content_Data: item.content_Data !== null ? item.content_Data : "null",
      error_Logs: item.error_Logs !== null ? item.error_Logs : "null",
      success_Logs: item.success_Logs !== null ? item.success_Logs : "null",
      info_Logs: item.info_Logs !== null ? item.info_Logs : "null",
      data_Intime: item.data_Intime !== null ? item.data_Intime : "null",
      data_Outtime: item.data_Outtime !== null ? item.data_Outtime : "null",
    }));
    return transformedData;
  } catch (error) {
    console.log(error.message);
  }
};

const ExampleTable = async () => {
  const data = await getWebHookLogs();
  console.log("Data: ", data);
  return (
    <div>
      <table className="table" border={1}>
        <thead>
          <tr className="bg-black">
            <th className="text-primary">S. No</th>
            <th className="text-primary">Request ID</th>
            <th className="text-primary">Sub ID</th>
            <th className="text-primary">Broker Name</th>
            <th className="text-primary">Broker Type</th>
            <th className="text-primary">Content Data</th>
            <th className="text-primary">Error Logs</th>
            <th className="text-primary">Success Logs</th>
            <th className="text-primary">Info Logs</th>
            <th className="text-primary">Data Intime</th>
            <th className="text-primary">Data Outtime</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item: any, index: any) => (
            <tr key={index} className="bg-dark">
              <td className="text-white">{item.s_No}</td>
              <td className="text-white">{item.request_Id}</td>
              <td className="text-white">{item.sub_Id}</td>
              <td className="text-white">{item.broker_Name}</td>
              <td className="text-white">{item.broker_Type}</td>
              <td className="text-white">{item.content_Data}</td>
              <td className="text-white">{item.error_Logs}</td>
              <td className="text-white">{item.success_Logs}</td>
              <td className="text-white">{item.info_Logs}</td>
              <td className="text-white">{item.data_Intime}</td>
              <td className="text-white">{item.data_Outtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <DataTable1 data={data} />;
    </div>
  );
};

export default ExampleTable;
