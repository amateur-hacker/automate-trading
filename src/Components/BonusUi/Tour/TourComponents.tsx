import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import UserProfile from "./UserProfile";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { useTour } from "@reactour/tour";

const TourComponents = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    var timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      <CommonBreadcrumb pageTitle="Tour" parent="Bonus Ui" />
      <Container fluid>
        <div className="user-profile tour">
          <Row>
            <UserProfile />
            <LeftSection />
            <RightSection />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TourComponents;
