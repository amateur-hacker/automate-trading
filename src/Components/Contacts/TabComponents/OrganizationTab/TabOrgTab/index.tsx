import { Href, ImagePath } from "@/Constant";
import { OrgListData } from "@/Data/Contacts";
import Image from "next/image";
import { Fragment } from "react";
import { Media, TabPane } from "reactstrap";
import { EmailAddress, Gender, General, Personal, Print } from "@/Constant";

const TabOrg = () => {
  return (
    <>
      {OrgListData.map((item, i) => (
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <Media>
              <Image height={50} width={50} className="p-0 img-100 img-fluid m-r-20 rounded-circle update_img_5" src={`${ImagePath}/${item.img}`} alt="" />
              <Media body className="mt-0">
                <h5>
                  <span className="first_name_5">{item.name}</span>
                </h5>
                <p className="email_add_5">{item.email}</p>
                <ul className="simple-list">
                  <li>
                    <a href={Href} data-toggle="modal" data-target="#printModal">
                      {Print}
                    </a>
                  </li>
                </ul>
              </Media>
            </Media>
            <div className="email-general">
              <h6>{General}</h6>
              <p>
                {EmailAddress}: <span className="font-primary email_add_5">{item.email}</span>
              </p>
              <div className="gender">
                <h6>{Personal}</h6>
                <p>
                  {Gender}: <span>{item.gender}</span>
                </p>
              </div>
            </div>
          </div>
        </TabPane>
      ))}
    </>
  );
};

export default TabOrg;
