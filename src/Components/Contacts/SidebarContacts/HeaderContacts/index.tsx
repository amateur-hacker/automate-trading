import { ImagePath, MARKJENCO, MARKJENCOEMAIL } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Media } from "reactstrap";

const HeaderContacts = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Media>
      <div className="media-size-email">
        <Image height={50} width={50} className="me-3 rounded-circle" src={`${ImagePath}/user/user.png`} alt="" />
      </div>
      <Media body>
        <h6 className="f-w-700">
          <Link href={`/${i18LangStatus}/users/userprofile`}>{MARKJENCO}</Link>
        </h6>
        <p>{MARKJENCOEMAIL}</p>
      </Media>
    </Media>
  );
};

export default HeaderContacts;
