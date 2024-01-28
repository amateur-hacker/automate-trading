//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AustraliaMapSubHeading, CenterAustralia, RectangleAustralia } from "@/Data/Maps";
import { FeatureGroup, MapContainer, Popup, Rectangle, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const AustraliaMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader heading="Leaflet Australia MAP" subHeading={AustraliaMapSubHeading} />
        <CardBody>
          <MapContainer className="jvector-map-height" style={{ height: 389, width: 710.5 }} zoom={4} center={CenterAustralia} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <FeatureGroup pathOptions={{ color: "purple" }}>
              <Popup>Popup in FeatureGroup</Popup>
              <Rectangle bounds={RectangleAustralia} />
            </FeatureGroup>
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default AustraliaMap;
