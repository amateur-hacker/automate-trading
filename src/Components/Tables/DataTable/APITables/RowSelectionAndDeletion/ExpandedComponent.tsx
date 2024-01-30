import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { RowsSelectionAndDeletionHeading } from "@/Constant";
import {
  RowsSelectionAndDeletionSubHeading,
  DeleteDataTableColumns,
  DeleteRowData,
} from "@/Data/Table/DataTable";
import { deleteRowData } from "@/Type/Table";
import { SetStateAction, useCallback, useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import ExpandedComponents from "./ExpandedComponent";
import DataTable, { createTheme } from "react-data-table-component";
import { ChevronDown, ChevronRight } from "react-feather";
// const columns = [
// 	{
// 		name: 'Title',
// 		selector: row => row.title,
// 	},
// 	{
// 		name: 'Year',
// 		selector: row => row.year,
// 	},
// ];
const columns = [
  {
    id: "name",
    name: "Name",
    selector: (row: any) => row.name,
  },
  {
    id: "age",
    name: "Age",
    selector: (row: any) => row.age,
  },
  {
    id: "occupation",
    name: "Occupation",
    selector: (row: any) => row.occupation,
  },
];

const customData = [
  {
    name: "person1",
    age: 21,
    occupation: "xyz",
  },
];

const ExpandedComponent = () => {
  const [data, setData] = useState(customData);
  const [selectedRows, setSelectedRows] = useState<deleteRowData[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const handleRowSelected = useCallback(
    (state: { selectedRows: SetStateAction<deleteRowData[]> }) => {
      setSelectedRows(state.selectedRows);
    },
    []
  );
  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete:\r ${selectedRows.map(
          (r: deleteRowData) => r.name
        )}?`
      )
    ) {
      setToggleCleared(!toggleCleared);
      setData(
        data.filter((item: any) =>
          selectedRows.filter((elem: deleteRowData) => elem.id === item.id)
            .length > 0
            ? false
            : true
        )
      );
      setSelectedRows([]);
    }
  };
  return (
    <Col sm="12">
      <div className="table-responsive">
        <div className="dataTables_wrapper">
          <DataTable
            data={data}
            columns={columns}
            clearSelectedRows={toggleCleared}
            expandableRows
            expandableRowsComponent={ExpandedComponents}
            expandableIcon={{
              collapsed: <ChevronRight className="chevron" />,
              expanded: <ChevronDown className="chevron" />,
            }}
            className="custom-table"
          />
        </div>
      </div>
    </Col>
  );
};

export default ExpandedComponent;
