import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CssData } from "@/Data/Editor";
import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";

const CssMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader heading="CSS Mode" />
        <CardBody>
          <AceEditor style={{ marginTop: "0px", width: "663px", height: "428px", marginLeft: "0px" }} mode="css" theme="monokai" value={CssData} name="blah2" fontSize={14} showPrintMargin={true} showGutter={true} setOptions={{ useWorker: false }} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default CssMode;
