import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Media } from "reactstrap";
import Cookies from "js-cookie";
import { decryptData } from "@/Config/decryptData";

const Greeting = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const [userName, setUsername] = useState("");
  const router = useRouter();

  const getUserProfile = async () => {
    try {
      const authToken = Cookies?.get("authtoken");

      const response = await fetch(
        "https://nextlevelpine.com/get-user-profile",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken ?? "",
          },
        }
      );

      const data = await response.text();
      const decryptedResponse = decryptData(data);
      const jsonResponse = JSON.parse(decryptedResponse);

      setUsername(jsonResponse[0]?.Username);
    } catch (error) {
      console.log(`Error coming from addApi function: ${error.message}`);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <Col xl="6" md="6" className="dash-xl-50 box-col-12">
      <Card className="profile-greeting">
        <CardBody>
          <Media>
            <Media body>
              <div className="greeting-user">
                <h1>Hello, {userName && userName}</h1>
                <p>Welcome back, your dashboard is ready!</p>
                <Button
                  color="white"
                  onClick={() =>
                    router.push(`/${i18LangStatus}/blog/blogsingle`)
                  }
                  className="btn-outline-white_color"
                >
                  Get Started<i className="icon-arrow-right"></i>
                </Button>
              </div>
            </Media>
          </Media>
          <div className="cartoon-img">
            <Image
              className="img-fluid"
              src={`${ImagePath}/images.svg`}
              alt=""
              height={500}
              width={400}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Greeting;
