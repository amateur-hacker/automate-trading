import { cookies } from "next/headers";
import BrokerTable from "./BrokerTable";

const getBrokerLogs = async () => {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get("authtoken")?.value;
    // console.log(authToken);
    const response = await fetch("https://nextlevelpine.com/get-broker-logs", {
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
      s_No: item.sNo !== null && item.sNo !== "" ? item.sNo : "null",
      api_Id: item.api_Id !== null && item.apiId !== "" ? item.apiId : "null",
      request_Id:
        item.request_Id !== null && item.request_Id !== ""
          ? item.request_Id
          : "null",
      sub_Id: item.sub_Id !== null && item.sub_Id !== "" ? item.sub_Id : "null",
      broker_Name:
        item.broker_Name !== null && item.broker_Name !== ""
          ? item.broker_Name
          : "null",
      // broker_Type:
      //   item.broker_Type !== null && item.broker_Type !== ""
      //     ? item.broker_Type
      //     : "null",
      content_Data:
        item.content_Data !== null && item.content_Data !== ""
          ? item.content_Data
          : "null",
      broker_Data:
        item.broker_Data !== null && item.broker_Data !== ""
          ? item.broker_Data
          : "null",
      request_Name:
        item.request_Name !== null && item.request_Name !== ""
          ? item.request_Name
          : "null",
      error_Logs:
        item.error_Logs !== null && item.error_Logs !== ""
          ? item.error_Logs
          : "null",
      success_Logs:
        item.success_Logs !== null && item.success_Logs !== ""
          ? item.success_Logs
          : "null",
      info_Logs:
        item.info_Logs !== null && item.info_Logs !== ""
          ? item.info_Logs
          : "null",
      data_Intime:
        item.data_Intime !== null && item.data_Intime !== ""
          ? item.data_Intime
          : "null",
      data_Outtime:
        item.data_Outtime !== null && item.data_Outtime !== ""
          ? item.data_Outtime
          : "null",
    }));
    return transformedData;
  } catch (error) {
    console.log(error.message);
  }
};

const BrokerLogsSSR = async () => {
  const data = await getBrokerLogs();

  console.log(data);
  return (
    <div>
      <BrokerTable data={data} />
    </div>
  );
};

export default BrokerLogsSSR;
