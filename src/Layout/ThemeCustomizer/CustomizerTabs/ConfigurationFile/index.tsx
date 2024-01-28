import ConfigDB from "@/Config/ThemeConfig";
import { Cancel, Configuration, CopyText } from "@/Constant";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";

const ConfigurationFile = ({ toggle, modal }: any) => {
  const configDB = ConfigDB.data;
  return (
    <Modal isOpen={modal} toggle={toggle} className="modal-body" centered={true}>
      <ModalHeader toggle={toggle}>{Configuration}</ModalHeader>
      <ModalBody>
        <Container fluid={true} className="bd-example-row">
          <Row>
            <p>{"To replace our design with your desired theme. Please do configuration as mention"} </p>
            <p>
              {" "}
              <b> {"Path : data > customizer > config.jsx "}</b>{" "}
            </p>
          </Row>
          <pre>
            <code>
              <div> {"export class ConfigDB "}&#123;</div>
              <div> {"static data"} = &#123;</div>
              <div> {"settings"}&#58; &#123;</div>
              <div>
                {" "}
                {"layout_type"}&#58; '{configDB.settings.layout_type}',
              </div>

              <div> {"sidebar"}&#58; &#123;</div>
              <div>
                {" "}
                {"type"}&#58; '{configDB.settings.sidebar.type}',
              </div>
              <div> &#125;,</div>
              <div>
                {" "}
                {"sidebar_setting"}&#58; '{configDB.settings.sidebar_setting}',{" "}
              </div>
              <div> &#125;,</div>
              <div> {"color"}&#58; &#123;</div>
              <div>
                {" "}
                {"primary_color"}&#58; '{configDB.color.primary_color}',{" "}
              </div>
              <div>
                {" "}
                {"secondary_color"}&#58; '{configDB.color.secondary_color}',{" "}
              </div>
              <div>
                {" "}
                {"mix_background_layout"}&#58; '{configDB.color.mix_background_layout}',{" "}
              </div>
              <div> &#125;,</div>

              <div> &#125;</div>
              <div> &#125;</div>
            </code>
          </pre>
        </Container>
      </ModalBody>
      <ModalFooter>
        <CopyToClipboard text={JSON.stringify(configDB)}>
          <Button
            color="primary"
            className="notification"
            onClick={() =>
              toast.success("Code Copied to clipboard !", {
                position: toast.POSITION.BOTTOM_RIGHT,
              })
            }
          >
            {CopyText}
          </Button>
        </CopyToClipboard>
        <Button color="secondary" onClick={toggle}>
          {Cancel}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfigurationFile;
