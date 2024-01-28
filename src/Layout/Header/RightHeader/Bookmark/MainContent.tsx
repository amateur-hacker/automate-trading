import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import { Col, Row } from "reactstrap";

export const MainContent = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const router = useRouter();
  const { bookmarkedData } = useAppSelector((store) => store.sidebarSlice);
  return (
    <Row>
      {bookmarkedData.map((item, i) => (
        <Col key={i} xs="4" className=" text-center">
          <div className="bookmark-content">
            <div className="bookmark-icon">{item.icon}</div>
          </div>
        </Col>
      ))}
    </Row>
  );
};
