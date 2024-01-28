import React from "react";
import DataTable from "react-data-table-component";
import { SupportTicketColumns, SupportTicketTableData } from "@/Data/SupportTicket";

const TicketTable = () => {
  return <DataTable className="table-responsive support-table" columns={SupportTicketColumns} data={SupportTicketTableData} striped={true} pagination />;
};
export default TicketTable;
