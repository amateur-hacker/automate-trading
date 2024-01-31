import Cookies from "js-cookie";
import { decryptData } from "@/Config/decryptData";

const getUserProfile = async () => {
  try {
    const authToken = Cookies?.get("authtoken");

    const response = await fetch("https://nextlevelpine.com/get-user-profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken ?? "",
      },
    });

    const data = await response.text();
    const decryptedResponse = decryptData(data);
    const jsonResponse = JSON.parse(decryptedResponse);

    return jsonResponse[0];
  } catch (error) {
    console.log(`Error coming from addApi function: ${error.message}`);
  }
};

const GetProfile = async () => {
  const userProfile = await getUserProfile();
  return (
    <>
    {userProfile.userName}
    </>
  );
};

export default GetProfile;
