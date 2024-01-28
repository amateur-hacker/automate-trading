//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WorldMapSubheading } from "@/Data/Maps";
import { MapContainer, TileLayer } from "react-leaflet";
import { Card, CardBody, Col } from "reactstrap";

const WorldMap = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader heading="Leaflet World MAP" subHeading={WorldMapSubheading} />
        <CardBody>
          <MapContainer className="jvector-map-height" style={{ height: 389, width: 710.5 }} center={[50, 10]} zoom={1} maxZoom={10} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}>
            <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WorldMap;
