import React from "react";
import { Card, Col } from "reactstrap";
import { ImagePath, MarkJecno } from "@/Constant";
import Image from "next/image";

const Post1 = () => {
  return (
    <Col xxl="6" className="set-col-12 box-col-5 xl-40">
      <Card>
        <div className="blog-box blog-shadow">
          <Image height={600} width={800} className="img-fluid bg-img-cover" src={`${ImagePath}/blog/blog.jpg`} alt="" />
          <div className="blog-details">
            <p>{"25 July 2023"}</p>
            <h4>{"Accusamus et iusto odio dignissimos ducimus qui blanditiis."}</h4>
            <ul className="simple-list blog-social flex-row">
              <li>
                <i className="icofont icofont-user"></i>
                {MarkJecno}
              </li>
              <li>
                <i className="icofont icofont-thumbs-up"></i>
                {"02 Hits"}
              </li>
              <li>
                <i className="icofont icofont-ui-chat"></i>
                {"598 Comments"}
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default Post1;
