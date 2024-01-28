import { ImagePath } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { filterKnowledgeData, setInputValue } from "@/Redux/Slices/KnowledgeBaseSlice";
import { Search } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Col, Form, Input } from "reactstrap";
const HeaderKnowledgeBase = () => {
  const searchData = useSelector((store: RootState) => store.knowledgeBaseSlice.inputValue);

  const dispatch = useDispatch();
  return (
    <Col xs="12">
      <div className="knowledgebase-bg" style={{ backgroundImage: `url(${ImagePath}/knowledgebase/bg_1.jpg)`, backgroundSize: "cover", backgroundPosition: "center", display: "block" }}></div>
      <div className="knowledgebase-search">
        <div>
          <h3>How Can I help you?</h3>
          <Form className="form-inline">
            <div className="w-100 mb-0">
              <Search />
              <Input
                onChange={(e) => {
                  dispatch(setInputValue(e.target.value));
                  dispatch(filterKnowledgeData(e.target.value));
                }}
                className="form-control-plaintext w-100"
                value={searchData}
                type="text"
                placeholder="Type question here"
              />
            </div>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default HeaderKnowledgeBase;
