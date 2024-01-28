import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicMap from "./BasicMap";
import MarkerMaps from "./MarkerMap";
import PolygonMaps from "./PolygonMaps";
import PolylineMaps from "./PolylineMaps";

const GoogleMaps = () => {
  return (
    <>
      <CommonBreadcrumb parent="Map" pageTitle="Google Map" />
      <Container fluid>
        <Row>
          <BasicMap />
          <MarkerMaps />
          <PolygonMaps />
          <PolylineMaps />
        </Row>
      </Container>
    </>
  );
};

export default GoogleMaps;
