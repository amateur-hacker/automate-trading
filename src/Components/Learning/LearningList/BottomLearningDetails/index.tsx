import { Href, ImagePath } from "@/Constant";
import { BottomLearningListData, BottomLearningParagraph } from "@/Data/Learning";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Card, Col } from "reactstrap";

const BottomLearningList = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <>
      {BottomLearningListData.map((item, i) => (
        <Col xl="4" sm="6" key={i} className=" box-col-6">
          <Card>
            <div className="product-box learning-box">
              <div className="product-img">
                <Image height={500} width={500} className="img-fluid top-radius-blog" src={`${ImagePath}/faq/${item.image}.jpg`} alt="" />
                <div className="product-hover">
                  <ul>
                    <li>
                      <i className="icon-link" onClick={() => router.push(`/${i18LangStatus}/learning/learning-detail`)}></i>
                    </li>
                    <li>
                      <i className="icon-import"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="details-main">
                <a href={Href}>
                  <div className="bottom-details">
                    <h6>{item.title}</h6>
                  </div>
                </a>
                <p>{BottomLearningParagraph}</p>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BottomLearningList;
