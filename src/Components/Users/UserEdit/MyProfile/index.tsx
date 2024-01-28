import { Bio, EmailAddress, Href, ImagePath, MyProfiles, Password, Save, Website } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Media, Row } from "reactstrap";

const MyProfile = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <Col xl="4">
      <Card>
        <CardHeader className="pb-0">
          <h4 className="card-title mb-0">{MyProfiles}</h4>
          <div className="card-options">
            <a className="card-options-collapse" href={Href}>
              <i className="fe fe-chevron-up"></i>
            </a>
            <a className="card-options-remove" href={Href}>
              <i className="fe fe-x"></i>
            </a>
          </div>
        </CardHeader>
        <CardBody>
          <Form>
            <Row className="mb-2">
              <div className="profile-title">
                <Media>
                  <Image height={70} width={70} className="img-70 rounded-circle" alt="" src={`${ImagePath}/user/7.jpg`} />
                  <Media body>
                    <h3 className="mb-1 f-20 txt-primary">
                      <div onClick={() => router.push(`/${i18LangStatus}/users/userprofile`)}>MARK JECNO</div>
                    </h3>
                    <p>DESIGNER</p>
                  </Media>
                </Media>
              </div>
            </Row>
            <FormGroup className="mb-3">
              <h6 className="form-label">{Bio}</h6>
              <Input type="textarea" rows="5" defaultValue="On the other hand, we denounce with righteous indignation" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label className="form-label">{EmailAddress}</Label>
              <Input placeholder="your-email@domain.com" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label className="form-label">{Password}</Label>
              <Input type="password" defaultValue="password" />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label className="form-label">{Website}</Label>
              <Input placeholder="http://Uplor .com" />
            </FormGroup>
            <div className="form-footer">
              <Button className="btn-block" color="primary">
                {Save}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MyProfile;
