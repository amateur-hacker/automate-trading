import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Col } from "reactstrap";

const SearchNotFoundClass = () => {
  return (
    <Col sm="12">
      <div>
        <div className="search-not-found text-center">
          <Image height={130} width={200} src={`${ImagePath}/search-not-found.png`} alt="image" className="second-search" style={{ display: "inline" }} />
          <p className="mb-0">{"Sorry, Not Found Any Contact"}</p>
        </div>
      </div>
    </Col>
  );
};

export default SearchNotFoundClass;
