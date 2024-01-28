import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import SalesStats from "./SalesStats";
import InvoiceOverview from "./InvoiceOverview";
import HotSellingProduct from "./HotSelling";
import RecentOrders from "./RecentOrders";
import OurActivities from "./OurActivities";
import RevenueByCategory from "./RevenueByCategory";
import Sliders from "./Slider";
import SupportTicket from "./SupportTicket";
import TotalSales from "./ToatalSaleEcommerce";
import TotalSalesECommerce from "./ToatalSaleEcommerce";

const ECommerce = () => {
  return (
    <>
      <CommonBreadcrumb parent="Dashboard" pageTitle="E-Commerce" />
      <Container fluid className="ecommerce-dash">
        <Row>
          <SalesStats />
          <InvoiceOverview />
          <HotSellingProduct />
          <RecentOrders />
          <OurActivities />
          <RevenueByCategory />
          <Sliders />
          <SupportTicket />
          <TotalSalesECommerce />
        </Row>
      </Container>
    </>
  );
};

export default ECommerce;
