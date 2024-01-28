import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { JavascriptData } from "@/Data/Editor";
import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";

const JavaScriptMode = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader heading="Javascript Mode" />
        <CardBody>
          <div className="ace-editor" id="editor">
            <AceEditor style={{ marginTop: "0px", width: "663px", height: "428px", marginLeft: "0px" }} mode="javascript" theme={"monokai"} value={JavascriptData} name="blah2" fontSize={14} showPrintMargin={true} showGutter={true} setOptions={{ useWorker: false }} editorProps={{ $blockScrolling: true }} highlightActiveLine={true} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavaScriptMode;
