//@ts-nocheck
import { Href, ImagePath } from "@/Constant";
import Image from "next/image";

export const OrderHistoryData = [
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/1.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Long Top</a>
        <div className="order-process">
          <span className="order-process-circle"></span>Processing
        </div>
      </div>
    ),
    Size: "M",
    Color: "Lavander",
    Article_number: "01024224",
    Units: "1",
    Price: "$25",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/2.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Fancy watch</a>
        <div className="order-process">
          <span className="order-process-circle"></span>Processing
        </div>
      </div>
    ),
    Size: "L",
    Color: "Blue",
    Article_number: "2024242",
    Units: "1",
    Price: "$85",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/3.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Man shoes</a>
        <div className="order-process">
          <span className="order-process-circle"></span>Processing
        </div>
      </div>
    ),
    Size: "XL",
    Color: "Brown",
    Article_number: "875554",
    Units: "1",
    Price: "$89",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/4.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Dress</a>
        <div className="order-process">
          <span className="order-process-circle shipped-order"></span>Shipped
        </div>
      </div>
    ),
    Size: "M",
    Color: "Green",
    Article_number: "45645643",
    Units: "1",
    Price: "$35",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/15.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Slipper</a>
        <div className="order-process">
          <span className="order-process-circle shipped-order"></span>Shipped
        </div>
      </div>
    ),
    Size: "XXL",
    Color: "Pink",
    Article_number: "94864563",
    Units: "1",
    Price: "$50",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/12.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Jacket</a>
        <div className="order-process">
          <span className="order-process-circle shipped-order"></span>Shipped
        </div>
      </div>
    ),
    Size: "XXXL",
    Color: "Black",
    Article_number: "6466645",
    Units: "1",
    Price: "$285",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/13.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Handbag</a>
        <div className="order-process">
          <span className="order-process-circle shipped-order"></span>Shipped
        </div>
      </div>
    ),
    Size: "M",
    Color: "Brown",
    Article_number: "555758",
    Units: "1",
    Price: "$245",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/14.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Iphone6</a>
        <div className="order-process">
          <span className="order-process-circle cancel-order"></span>Cancelled
        </div>
      </div>
    ),
    Size: "S",
    Color: "Orange",
    Article_number: "1245554",
    Units: "1",
    Price: "$235",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/1.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Watch</a>
        <div className="order-process">
          <span className="order-process-circle cancel-order"></span>Cancelled
        </div>
      </div>
    ),
    Size: "R",
    Color: "Pista",
    Article_number: "123456",
    Units: "1",
    Price: "$55",
  },
  {
    Product: <Image className="img-fluid img-30" src={`${ImagePath}/product/1.png`} alt="" height={50} width={50}></Image>,
    Product_Name: (
      <div className="product-name">
        <a href={Href}>Long Top</a>
        <div className="order-process">
          <span className="order-process-circle"></span>Processing
        </div>
      </div>
    ),
    Size: "L",
    Color: "Blue",
    Article_number: "456879",
    Units: "1",
    Price: "$5",
  },
];

export const OrderHistoryColumns = [
  {
    name: <h5>Product</h5>,
    selector: (row) => row["Product"],
    sortable: true,
    center: true,
  },
  {
    name: <h5>Product Name</h5>,
    selector: (row) => row["Product_Name"],
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: <h5>Size</h5>,
    selector: (row) => row["Size"],
    sortable: true,
    center: true,
  },
  {
    name: <h5>Color</h5>,
    selector: (row) => row["Color"],
    sortable: true,
    center: true,
  },
  {
    name: <h5>Article number</h5>,
    selector: (row) => row["Article_number"],
    sortable: true,
    center: true,
  },
  {
    name: <h5>Units</h5>,
    selector: (row) => row["Units"],
    sortable: true,
    center: true,
  },
  {
    name: <h5>Price</h5>,
    selector: (row) => row["Price"],
    sortable: true,
    center: true,
  },
];
