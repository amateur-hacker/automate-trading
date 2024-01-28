import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container } from "reactstrap";
import MDEExample from "./MDEExample";
import SecondExample from "./SecondExample";

const MDEEditor = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="MDE Editor" parent="Editor" />
      <Container fluid>
        <MDEExample />
        <SecondExample />
      </Container>
    </>
  );
};

export default MDEEditor;
