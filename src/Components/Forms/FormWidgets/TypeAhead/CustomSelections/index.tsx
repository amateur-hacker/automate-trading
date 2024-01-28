import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomSelections } from "@/Constant";
import { Typeahead } from "react-bootstrap-typeahead";
import { Card, CardBody, Col, Form, FormGroup } from "reactstrap";

const CustomSelectionTypeAhead = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={CustomSelections} />
        <CardBody>
          <div id="bloodhound">
            <Form className="theme-form">
              <FormGroup>
                <Typeahead id="custom-typeahead" allowNew multiple newSelectionPrefix="Add a new item: " options={[]} placeholder="Type anything..." />
              </FormGroup>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomSelectionTypeAhead;
