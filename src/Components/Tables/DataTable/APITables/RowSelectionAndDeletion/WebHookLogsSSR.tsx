import { cookies } from "next/headers";
import WebHookTable from "./WebHookTable";

const getWebHookLogs = async () => {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get("authtoken")?.value;
    // console.log(authToken);
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

const WebHookLogsSSR = async () => {
  const data = await getWebHookLogs();

  console.log(data);
  return (
    <div>
      <WebHookTable data={data} />
    </div>
  );
};

export default WebHookLogsSSR;
