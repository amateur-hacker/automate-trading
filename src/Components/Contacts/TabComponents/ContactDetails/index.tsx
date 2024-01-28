import { Delete, Edit, EmailAddress, General, History, Href, MobileNo, Name, Print } from "@/Constant";
import { ContactDetailsProps } from "@/Type/Contacts";
import Image from "next/image";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Media } from "reactstrap";
import SweetAlert from "sweetalert2";
import PrintModal from "../PrintModal";
import SearchNotFoundClass from "../SearchNotFound";

const ContactDetailsClass = ({ selectedUser, userEditCallback }: ContactDetailsProps) => {
  const [printModal, setPrintModal] = useState(false);
  const printModalToggle = () => setPrintModal(!printModal);
  const dispatch = useDispatch();
  const toggleCallback = useCallback((toggle: boolean) => {
    setPrintModal(toggle);
  }, []);

  const history = () => {
    document.querySelector(".history")?.classList.add("show");
  };

  const editUsers = (usersData: any) => {
    dispatch({ type: "setTempId", payload: usersData.id });
    userEditCallback(true, usersData);
  };

  const deleteUser = (userId: number | undefined) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch({ type: "deletedUser", payload: userId });
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <>
      {selectedUser ? (
        <div className="profile-mail">
          <Media>
            <Image height={50} width={50} className="img-100 img-fluid m-r-20 rounded-circle update_img_0" src={`${selectedUser.avatar}`} alt="" />
            <Media body className=" mt-0">
              <h5>
                <span className="first_name_0">{selectedUser.name}</span> <span className="last_name_0">{selectedUser.surname}</span>
              </h5>
              <p className="email_add_0">
                {selectedUser.name}
                {"@gmail.com"}
              </p>
              <ul className="simple-list flex-row">
                <li>
                  <a href={Href} onClick={() => editUsers(selectedUser)}>
                    {Edit}
                  </a>
                </li>
                <li>
                  <a href={Href} onClick={() => deleteUser(selectedUser.id)}>
                    {Delete}
                  </a>
                </li>
                <li>
                  <a href={Href} onClick={() => history()}>
                    {History}
                  </a>
                </li>
                <li>
                  <a href={Href} onClick={() => printModalToggle()} data-toggle="modal" data-target="#printModal">
                    {Print}
                  </a>
                </li>
              </ul>
            </Media>
          </Media>
          <div className="email-general">
            <h6 className="mb-3">{General}</h6>
            <ul className="simple-list">
              <li>
                {Name} <span className="font-primary first_name_0">{selectedUser.name}</span>
              </li>
              <li>
                {MobileNo} <span className="font-primary mobile_num_0">{selectedUser.mobile}</span>
              </li>
              <li>
                {EmailAddress} <span className="font-primary email_add_0">{`${selectedUser.name}@gmail.com`} </span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <SearchNotFoundClass />
      )}
      {selectedUser && <PrintModal toggleCallback={toggleCallback} printModal={printModal} selectedUser={selectedUser} />}
    </>
  );
};

export default ContactDetailsClass;
