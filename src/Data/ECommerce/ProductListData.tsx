//@ts-nocheck
import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Button } from "reactstrap";

const style = {
  width: 40,
  height: 40,
};
const style2 = {
  width: 60,
  fontSize: 13,
  padding: 3,
};

export const ProductListSubHeading = [
  {
    text: "The searching functionality provided by DataTables is useful for quickly search through the information in the table - however the search is global, and you may wish to present controls that search on specific columns.",
  },
];

export const productData = [
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-1.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Red Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$10",
    stock: <div className="font-success">In Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-2.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Brown Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$10",
    stock: <div className="font-danger">Out of Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-3.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Yellow Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$10",
    stock: <div className="font-danger">Out of Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-4.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Green Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$20",
    stock: <div className="font-primary">Low Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-5.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Pink Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$30",
    stock: <div className="font-success">In Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-4.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Blue Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$40",
    stock: <div className="font-success">In Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-2.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Grey Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$10",
    stock: <div className="font-success">In Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
  {
    image: <Image src={`${ImagePath}/ecommerce/product-table-3.png`} style={style} alt="" height={50} width={50} />,
    Details: (
      <div>
        <h6>Black Lipstick</h6>
        <span>Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens</span>
      </div>
    ),
    amount: "$10",
    stock: <div className="font-success">In Stock</div>,
    start_date: "2023/4/19",
    action: (
      <div>
        <span>
          <Button size="xs" style={style2} color="danger">
            Delete
          </Button>
        </span>
        <span>
          <Button style={style2} color="primary" size="xs" className=" ms-2">
            Edit
          </Button>
        </span>
      </div>
    ),
  },
];
export const productColumns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: "Details",
    selector: (row) => row.Details,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
    center: true,
  },
  {
    name: "Stock",
    selector: (row) => row.stock,
    sortable: true,
    center: true,
  },
  {
    name: "Start_date",
    selector: (row) => row.start_date,
    sortable: true,
    center: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
    sortable: true,
    center: true,
  },
];
