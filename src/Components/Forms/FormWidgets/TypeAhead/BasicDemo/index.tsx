import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicDemo } from "@/Constant";
import { BasicDemoTypeAheadSubHeading } from "@/Data/Forms/FormWidgets";
import { useAppSelector } from "@/Redux/Hooks";
import { fetchTypeaheadData } from "@/Redux/Slices/TypeaheadSlice";
import { useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import { Card, CardBody, Col, Form, FormGroup } from "reactstrap";

const BasicDemoTypeAhead = () => {
  const typeAheadData = useAppSelector((store) => store.typeAheadSlice.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTypeaheadData());
  }, []);
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={BasicDemo} subHeading={BasicDemoTypeAheadSubHeading} />
        <CardBody>
          <div id="the-basics">
            <Form>
              <FormGroup>
                <Typeahead id="basic-typeahead" labelKey="name" options={typeAheadData} placeholder="Choose a state..." />
              </FormGroup>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BasicDemoTypeAhead;
