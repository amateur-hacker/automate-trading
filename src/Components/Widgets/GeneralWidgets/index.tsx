import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import TopSectionCards from "./TopSectionCards";
import SalesDetails from "./SaleDetails";
import OrderDetails from "./OrderDetails";
import Calendar from "./Calendar";
import CustomerFeedback from "./CustomerFeedback";
import ClockAndWeather from "./ClockAndWeather";
import RecentActivity from "./RecentActivity";
import ManagerProfile from "./ManagerProfile";
import KelvinProfile from "./KelvinProfile";
import SocialMediaHandle from "./SocialMediaHandle";
import UsageInBrowser from "./UsageInBrowser";
import ProductCart from "./ProductsCart";
import EmployeeStatus from "./EmployeeStatus";
import InfoCard from "./InfoCard";
import ContactUsCard from "./ContactUs";

const GeneralWidgets = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="General" parent="Widgets" />
      <Container fluid className="general-widget">
        <Row>
          <TopSectionCards />
          <SalesDetails />
          <OrderDetails />
          <Calendar />
          <CustomerFeedback />
          <ClockAndWeather />
          <RecentActivity />
          <ManagerProfile />
          <KelvinProfile />
          <SocialMediaHandle />
          <UsageInBrowser />
          <ProductCart />
          <EmployeeStatus />
          <InfoCard />
          <ContactUsCard />
        </Row>
      </Container>
    </>
  );
};

export default GeneralWidgets;
