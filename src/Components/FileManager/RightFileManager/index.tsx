//@ts-nocheck
import { AddNew, AllFiles, Files, Folders, ImagePath, RecentlyOpenedFiles } from "@/Constant";
import { FilesList } from "@/Data/FileManager";
import Image from "next/image";
import { useState } from "react";
import { PlusSquare, Upload } from "react-feather";
import { toast } from "react-toastify";
import { Button, Card, CardBody, CardHeader, Col, Form, Input, Media } from "reactstrap";
import SearchBar from "./SearchBar";

const RightFileManager = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [myfile, setMyFile] = useState(FilesList);

  const fileList = myfile
    .filter((data) => {
      if (searchTerm == null) return data;
      else if (data.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    })
    .map((data, i) => {
      return (
        <li className="file-box" key={i}>
          <div className="file-top">
            <i className={data.icon}></i>
            <i className="fa fa-ellipsis-v f-14 ellips"></i>
          </div>
          <div className="file-bottom">
            <h6>{data.name}</h6>
            <p className="mb-1">{data.size}</p>
            <p>
              {"last open"} : {data.modify}
            </p>
          </div>
        </li>
      );
    });
  const getFile = () => {
    document.getElementById("upfile").click();
  };
  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const onFileUpload = () => {
    let myFiles = [...myfile];
    if (selectedFile !== null) {
      myFiles.push({
        id: myfile.length + 1,
        name: selectedFile.name,
        size: `${selectedFile.size}`,
        modify: `${selectedFile.lastModifiedDate}`,
        icon: "fa fa-file-text-o txt-info",
        folderClass: "",
        title: "",
        folderSize: "",
      });
      setMyFile(myFiles);
      toast.success("File Upload Successfully !");
    } else {
      toast.error("Please Select at least one file !");
    }
  };
  return (
    <Col xl="9" md="12">
      <div className="file-content">
        <Card>
          <CardHeader>
            <Media>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <Media body className="text-end">
                <Form className="d-inline-flex">
                  <Button color="primary me-2" onClick={getFile}>
                    <PlusSquare />
                    {AddNew}
                  </Button>
                  <div style={{ height: "0px", width: "0px", overflow: "hidden" }}>
                    <Input id="upfile" multiple type="file" onChange={(e) => onFileChange(e)} />
                  </div>
                </Form>
                <Button color="primary" tag="div" outline onClick={onFileUpload}>
                  <Upload />
                  {"Upload"}
                </Button>
              </Media>
            </Media>
          </CardHeader>
          {fileList.length ? (
            <CardBody className="file-manager">
              <h4>{AllFiles}</h4> <h6>{RecentlyOpenedFiles}</h6>
              <ul className=" files flex-row"> {fileList}</ul>
              <h5 className="mt-4">{Folders}</h5>
              <ul className="folder flex-row">
                {myfile.map((item) => {
                  return (
                    <li className="folder-box" key={item.id}>
                      <Media>
                        <i className={item.folderClass}></i>
                        <Media body className=" ms-3">
                          <h6 className="mb-0">{item.title}</h6>
                          <p>{item.folderSize}</p>
                        </Media>
                      </Media>
                    </li>
                  );
                })}
              </ul>
              <h5 className="mt-4">{Files}</h5>
              <ul className=" files flex-row">{fileList} </ul>
            </CardBody>
          ) : (
            <Image height={200} width={200} className="img-fluid m-auto" src={`${ImagePath}/search-not-found.png`} alt="" />
          )}
        </Card>
      </div>
    </Col>
  );
};
export default RightFileManager;
