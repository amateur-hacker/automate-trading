import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Remote } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { fetchTypeaheadData } from "@/Redux/Slices/TypeaheadSlice";
import { useEffect, useRef } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { useDispatch } from "react-redux";
import { Button, ButtonToolbar, Card, CardBody, Col, Form, FormGroup } from "reactstrap";

const RemoteTypeahead = () => {
  const ref = useRef<HTMLInputElement |any>();
  const typeAheadData = useAppSelector((store) => store.typeAheadSlice.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTypeaheadData());
  }, []);
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={Remote} />
        <CardBody>
          <div id="remote">
            <Form className="theme-form">
              <FormGroup>
                <Typeahead id="public-typeahead" defaultSelected={typeAheadData.slice(0, 4)} labelKey="name" multiple options={typeAheadData} placeholder="Choose a state..." ref={ref} />
                <ButtonToolbar style={{ marginTop: "10px" }}>
                  <Button className="mt-2" color="primary" onClick={() => ref.current?.clear()}>
                    {"Clear"}
                  </Button>
                  <Button className="ms-2 mt-2" color="primary" onClick={() => ref.current?.focus()}>
                    {"Focus"}
                  </Button>
                  <Button
                    className="ms-2 mt-2"
                    color="primary"
                    onClick={() => {
                      ref.current?.focus();
                      setTimeout(() => ref.current?.blur(), 1000);
                    }}
                  >
                    {"Focus, then blur after 1 second"}
                  </Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default RemoteTypeahead;
