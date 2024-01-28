import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { toast } from "react-toastify";
import { Container, Row } from "reactstrap";
import MultiVideoImageAudioUpload from "./AudioVdoImgUpload";
import CustomUpload from "./CustomUpload";
import LimitationUpload from "./LimitationUpload";
import MultiOnlyImageUpload from "./MultiOnlyImageUpload";
import SingleFileUploadDropzone from "./SingleFileUpload";

const Dropzone = () => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatus = () => {};

  const handleSubmit = () => {
    toast.success("Dropzone successfully submitted");
  };
  return (
    <>
      <CommonBreadcrumb parent="Bonus Ui" pageTitle="Dropzone" />
      <Container fluid>
        <Row>
          <SingleFileUploadDropzone getUploadParams={getUploadParams} handleChangeStatus={handleChangeStatus} />
          <MultiOnlyImageUpload getUploadParams={getUploadParams} handleChangeStatus={handleChangeStatus} handleSubmit={handleSubmit} />
          <MultiVideoImageAudioUpload getUploadParams={getUploadParams} handleChangeStatus={handleChangeStatus} handleSubmit={handleSubmit} />
          <LimitationUpload getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
          <CustomUpload getUploadParams={getUploadParams} handleSubmit={handleSubmit} />
        </Row>
      </Container>
    </>
  );
};

export default Dropzone;
