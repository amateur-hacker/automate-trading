import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleSelections } from "@/Constant";
import { MultipleSelectionTypeAheadSubHeading } from "@/Data/Forms/FormWidgets";
import { useAppSelector } from "@/Redux/Hooks";
import { fetchTypeaheadData } from "@/Redux/Slices/TypeaheadSlice";
import { useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import { Card, CardBody, Col, Form, FormGroup } from "reactstrap";

const MultipleTypeAhead = () => {
  const typeAheadData = useAppSelector((store) => store.typeAheadSlice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypeaheadData());
  }, []);

  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={MultipleSelections} subHeading={MultipleSelectionTypeAheadSubHeading} />
        <CardBody>
          <div id="prefetch">
            <Form className="theme-form">
              <FormGroup>
                <Typeahead id="multiple-typeahead" defaultSelected={typeAheadData} labelKey={"name"} multiple options={typeAheadData} placeholder="Choose a state..." clearButton />
              </FormGroup>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MultipleTypeAhead;
