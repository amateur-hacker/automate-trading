import { Action, ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { EmailDataType } from "@/Type/Email";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Star } from "react-feather";
import { Card, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Media, Row } from "reactstrap";

const MainMails = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  useEffect(() => {
    fetch("/api/emailApi")
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);
  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <div className="email-profile">
          <div>
            <div className="pe-0 b-r-light"></div>
            <div className="email-top">
              <Row>
                <Col xs="12">
                  <Media>
                    <Label className="email-chek d-block" htmlFor="chk-ani">
                      <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                    </Label>
                    <Media body>
                      <div className="dropdown">
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                          <DropdownToggle color="primary" caret>
                            {Action}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem>Refresh</DropdownItem>
                            <DropdownItem>Mark as important</DropdownItem>
                            <DropdownItem>Move to spam</DropdownItem>
                            <DropdownItem>Move to Trash</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                    </Media>
                  </Media>
                </Col>
              </Row>
            </div>
            <div className="inbox">
              {data &&
                data.map((item: EmailDataType) => {
                  return (
                    <Media key={item.id}>
                      <div className="media-size-email">
                        <Label className="d-block mb-0" htmlFor="chk-ani">
                          <Input className="checkbox_animated" id="chk-ani" type="checkbox" />
                        </Label>
                        <Star className="like" />
                        <Image height={20} width={20} className="me-3 rounded-circle" src={`${ImagePath}/${item.image}`} alt=" " />
                      </div>
                      <div onClick={() => router.push(`/${i18LangStatus}/email/readmail`)}>
                        <Media body>
                          <h6>{item.name}</h6>
                          <p>{item.text}</p>
                          <span>{item.time}</span>
                        </Media>
                      </div>
                    </Media>
                  );
                })}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default MainMails;
