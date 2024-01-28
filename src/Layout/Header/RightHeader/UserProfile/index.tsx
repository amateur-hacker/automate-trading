import { Href, ImagePath } from "@/Constant";
import { UserProfileData } from "@/Data/Header";
import { useAppSelector } from "@/Redux/Hooks";
import { AdminUsersSvg } from "@/svgIcons";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "react-feather";
import { Media } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";

const UserProfile = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [userId, setUserId] = useState("");
  const router = useRouter();
  // const LogOutUser = () => {
  //   Cookies.remove("token");
  //   router.push("/auth/login");
  // };
  const logOutUser = () => {
    try {
      toast("Logout Successfully");
      const authtoken = Cookies.get("authtoken");
      const userid = Cookies.get("userid");
      if (authtoken && userid) {
        Cookies.remove("userid");
        Cookies.remove("authtoken");
      }
      router.push("/login");
    } catch (error) {
      console.log(`Error coming from logoutUser function: ${error.message}`);
    }
  };

  useEffect(() => {
    const userIdCookie = Cookies?.get("userid") || "";
    setUserId(userIdCookie);
  }, []);

  return (
    <li className="profile-nav onhover-dropdown pe-0 py-0 me-0">
      <Media className="profile-media">
        <Image
          src={`${ImagePath}/avtar/man.png`}
          alt="profile image"
          height={40}
          width={40}
        />
        <Media className="flex flex-col items-center justify-center" body>
          <span>Emay Walter</span>
          <span className="user-id">ID: {userId}</span>
        </Media>
      </Media>
      <ul className="profile-dropdown onhover-show-div">
        {UserProfileData.map((item, i) => (
          <li key={i}>
            <Link href={`/${i18LangStatus}${item.link}`}>
              {item.logo}
              <span>{item.name} </span>
            </Link>
          </li>
        ))}
        <li>
          <a onClick={logOutUser} href={Href}>
            <LogOut />
            <span>Log Out </span>
          </a>
        </li>
      </ul>
    </li>
  );
};

export default UserProfile;
