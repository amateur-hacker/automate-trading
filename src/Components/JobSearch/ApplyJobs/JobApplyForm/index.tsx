import { UIDesigner, Submit, Cancel, Savethisjob, Href, ImagePath, CreativeTelecom } from "@/Constant";
import EducationDetails from "./EducationDetails";
import { Button, Card, CardBody, CardFooter, Col, Media } from "reactstrap";
import { RatingsData } from "@/Data/JobSearch";
import Image from "next/image";
import ExperienceDetails from "./Experience";
import PersonalDetail from "./PersonalDetail";
import UploadFiles from "./UploadFiles";

const JobApplyForm = () => {
  return (
    <Col xl="9" className="xl-60 box-xl-7">
      <Card>
        <div className="job-search">
          <CardBody className="pb-0">
            <Media>
              <Image height={20} width={40} className=" img-40 img-fluid  m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt="" />
              <Media body>
                <h6 className="f-w-600">
                  <a href={Href}>{UIDesigner}</a>
                  <span className="pull-right">
                    <Button color="primary">
                      <span>
                        <i className="fa fa-check text-white" />
                      </span>
                      {Savethisjob}
                    </Button>
                  </span>
                </h6>
                <p>
                  {CreativeTelecom}
                  {RatingsData}
                </p>
              </Media>
            </Media>
            <div className="job-description">
              <PersonalDetail />
              <EducationDetails />
              <ExperienceDetails />
              <UploadFiles />
            </div>
          </CardBody>
          <CardFooter>
            <Button color="primary mx-1">{Submit}</Button>
            <Button color="light">{Cancel}</Button>
          </CardFooter>
        </div>
      </Card>
    </Col>
  );
};

export default JobApplyForm;
