import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, Col, Container, Row } from "reactstrap";
import BookmarksTabs from "./BookmarksTabs";
import SideBar from "./SideBar";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";

const Bookmarks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getBookmarkData = async () => {
      try {
        await axios.get("/api/bookmarkApi").then((resp) => {
          dispatch({ type: "addData", payload: resp.data });
        });
      } catch (error) {
        console.log("cancelled", error);
      }
    };
    getBookmarkData();
  }, []);

  return (
    <>
    <CommonBreadcrumb parent="Bookmarks" pageTitle="Bookmarks"/>
    <Container fluid>
      <div className="email-wrap bookmark-wrap">
        <Row>
          <SideBar />
          <Col xl="9" md="12" className="box-col-8 xl-70">
            <div className="email-right-aside bookmark-tabcontent">
              <Card className="email-body radius-left">
                <div className="ps-0">
                  <BookmarksTabs />
                </div>
              </Card>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
    </>
  );
};
export default Bookmarks;
