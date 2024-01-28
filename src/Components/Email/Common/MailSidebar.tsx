import { Href, ImagePath } from "@/Constant";
import { EmailSidebarData } from "@/Data/Email";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Badge, Button, Card, CardBody, Media, Nav, NavItem } from "reactstrap";

const MailSidebar = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const OnHandelClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="md-sidebar job-sidebar">
      <Button color="primary" className="md-sidebar-toggle" href={Href} onClick={OnHandelClick}>
        email filter
      </Button>
      <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
        <div className="email-left-aside">
          <Card>
            <CardBody>
              <div className="email-app-sidebar">
                <Media>
                  <div className="media-size-email">
                    <Image height={60} width={60} className="me-2 rounded-circle" src={`${ImagePath}/user/user.png`} alt="" />
                  </div>
                  <Media body>
                    <h6 className="f-w-600">
                      <div onClick={() => router.push(`/${i18LangStatus}/users/userprofile`)}>MARKJENCO</div>
                    </h6>
                    <p>Markjecno @gmail.com</p>
                  </Media>
                </Media>
                <Nav className="simple-list main-menu " role="tablist">
                  <NavItem>
                    <Button color="primary" className="btn-block btn-mail w-100" onClick={() => router.push(`/${i18LangStatus}/email/compose`)}>
                      <i className="icofont icofont-envelope me-2"></i> NEW MAIL
                    </Button>
                  </NavItem>
                  <NavItem>
                    <a className="show" href={Href}>
                      <span className="title">
                        <i className="icon-import"></i> Inbox
                      </span>
                      <Badge color="transparent" className="pull-right">
                        (236)
                      </Badge>
                    </a>
                  </NavItem>
                  {EmailSidebarData.map((item) => {
                    return (
                      <li key={item.id}>
                        {!item.line ? (
                          <a href={Href}>
                            <span className="title">
                              <i className={item.classname}></i>
                              {item.title}
                            </span>
                            <Badge color="transparent" className="pull-right">
                              {item.badge}
                            </Badge>
                          </a>
                        ) : (
                          item.line
                        )}
                      </li>
                    );
                  })}
                </Nav>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default MailSidebar;
