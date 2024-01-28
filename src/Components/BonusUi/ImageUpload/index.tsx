// @ts-nocheck
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleImageUpload } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import Files from "react-files";
import { Button, Card, CardBody, Col, Container, Row } from "reactstrap";

const ImageUpload = () => {
  const [files, setFiles] = useState<Files[]>([]);

  function deleteFile() {
    setFiles([]);
    return files;
  }
  const onFilesChange = (files: Files) => {
    setFiles(files);
  };
  const onFilesError = (files: Files) => {
    setFiles(files);
  };

  return (
    <>
      <CommonBreadcrumb pageTitle="Image Upload" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={MultipleImageUpload} />
              <CardBody>
                <Files className="files-dropzone fileContainer" onChange={onFilesChange} onError={onFilesError} accepts={["image/*"]} multiple={false} maxFileSize={10000000} minFileSize={0} clickable>
                  {files.length > 0 ? (
                    <div className="files-gallery">
                      {files.map((file, i) => (
                        <Image key={i} width={100} height={100} className="files-gallery-item w-100 h-100" alt="img" src={`${file.preview.url}`} />
                      ))}
                    </div>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <Button className="mt-2" color="primary">
                        Upload Image
                      </Button>
                    </div>
                  )}
                </Files>
                {files.length > 0 ? (
                  <div className="d-flex justify-content-center">
                    <Button className="mt-2" color="danger" onClick={deleteFile}>
                      Delete
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ImageUpload;
