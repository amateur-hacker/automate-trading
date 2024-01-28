import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import AustraliaMap from "./AustraliaMap";
import IndiaMap from "./IndiaMap";
import UKMap from "./UKMap";
import WorldMap from "./WorldMap";

const LeafletMaps = () => {
  return (
    <>
      <CommonBreadcrumb parent="Map" pageTitle="Leaflet Map" />
      <Container fluid>
        <Row>
          <WorldMap />
          <UKMap />
          <IndiaMap />
          <AustraliaMap />
        </Row>
      </Container>
    </>
  );
};

export default LeafletMaps;
