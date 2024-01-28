import { Discard, Post } from "@/Constant";
import React from "react";
import Dropzone from "react-dropzone-uploader";
import { Button, Form } from "reactstrap";

const DropItems = () => {
  const getUploadParams = () => {
    return { url: "https://httpbin.org/post" };
  };
  const handleChangeStatus = () => {};

  return (
    <>
      <Form suppressHydrationWarning className="m-b-20">
        <div className="m-0 dz-message needsclick">
          <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            maxFiles={1}
            multiple={false}
            canCancel={false}
            inputContent="Drop files here or click to upload."
            styles={{
              dropzone: { width: "100%", height: 50 },
              dropzoneActive: { borderColor: "green" },
            }}
          />
        </div>
      </Form>
      <div className="btn-showcase text-end">
        <Button color="primary" type="submit">
          {Post}
        </Button>
        <Button color="light" type="reset">
          {Discard}
        </Button>
      </div>
    </>
  );
};

export default DropItems;
