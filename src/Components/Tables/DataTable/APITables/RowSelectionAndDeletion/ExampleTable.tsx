import { cookies } from "next/headers";
import DataTable from "react-data-table-component";
// import DataTable1 from "./DataTable1";

const getWebHookLogs = async () => {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get("authToken")?.value;
    console.log(authToken);
    const response = await fetch("https://nextlevelpine.com/get-webhook-logs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: authToken ?? "",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNCIsImVtYWlsIjoic2FjaGluMTIzNEBnbWFpbC5jb20iLCJ1aWQiOiJyUDhsbW1NRDZ2YjZDbWJVbnY2OGZlOTRLc20yIiwicGhvbmUiOiIxMjM0NTY3ODkwIiwiVXNlcm5hbWUiOiJzYWNoaW4xMjM0IiwiaWQiOiIyNCIsIm5iZiI6MTcwNzAwMDkyMSwiZXhwIjoxNzA3MDg3MzIxLCJpYXQiOjE3MDcwMDA5MjF9.fQZKBzN3XCP9_l1J1DpwCjA7JtOMtK_qP54jjmWyi2w",
      },
      next: {
        revalidate: 0,
      },
    });
    const apiData = await response.json();
    const transformedData = apiData["$values"].map((item: any, index: any) => ({
      s_No: item.sNo !== null ? item.sNo : "null",
      request_Id: item.request_Id !== null ? item.request_Id : "null",
      sub_Id: item.sub_Id !== null ? item.sub_Id : "null",
      broker_Name: item.broker_Name !== null ? item.broker_Name : "null",
      // broker_Type: item.broker_Type !== null ? item.broker_Type : "null",
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
    <div className="dataTables_wrapper">
      {/* <table
        className="table"
        border={1}
        style={{ marginBlock: "10rem", overflowX: "auto" }}
      >
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
        <tbody className="">
          {data.map((item: any, index: any) => (
            <tr key={index} style={{ backgroundColor: "#1f232b" }}>
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
      </table> */}
      <table className="table table-striped table-dark custom-table text-center">
        <thead>
          <tr>
            <th scope="col">S. No</th>
            <th scope="col">Request ID</th>
            <th scope="col">Sub ID</th>
            <th scope="col">Broker Name</th>
            <th scope="col">Content Data</th>
            <th scope="col">Error Logs</th>
            <th scope="col">Success Logs</th>
            <th scope="col">Info Logs</th>
            <th scope="col">Data Intime</th>
            <th scope="col">Data Outtime</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr style={{ color: "white" }}>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr> */}
          {data.map((item: any, index: any) => (
            <tr key={index} style={{ backgroundColor: "#1f232b" }}>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.s_No}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.request_Id}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.sub_Id}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.broker_Name}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.content_Data}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.error_Logs}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.success_Logs}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.info_Logs}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.data_Intime}
              </td>
              <td
                className="text-white"
                style={{
                  maxWidth: "10ch",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.data_Outtime}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <DataTable1 data={data} /> */}
    </div>
  );
};

export default ExampleTable;
