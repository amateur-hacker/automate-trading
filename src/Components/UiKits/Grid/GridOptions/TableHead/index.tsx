import { GridOptionHeaderData } from "@/Data/UiKits/Grid";

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th className="text-center">
          <br />
          <small className="digits"></small>
        </th>
        {GridOptionHeaderData.map((element, index) => (
          <th key={index} className="text-center">
            {element?.text}
            <br />
            <small className="digits">{element?.size}</small>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
