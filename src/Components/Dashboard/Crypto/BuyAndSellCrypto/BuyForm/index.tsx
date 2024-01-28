import { ArrowSvg } from "@/Components/Dashboard/DashBoardSvg";
import { Amount, BTC, BuyNow, TUSD, Total, USD } from "@/Constant";
import { Button, CardBody, Form, FormGroup, Input, InputGroup, InputGroupText, Label, TabContent, TabPane } from "reactstrap";

const BuyForm = () => {
  return (
    <CardBody className="pt-0">
      <TabContent id="pills-tabContent">
        <TabPane className="fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
          <div className="buy-sell-form">
            <Form>
              <FormGroup >
                <div className="small-group">
                  <Label> {Amount}</Label>
                  <InputGroup>
                    <Input type="text" placeholder="7,904.65" />
                    <InputGroupText className=" bg-transparent">{USD}</InputGroupText>
                  </InputGroup>
                </div>
                <div className="small-group">
                  <div className="convert-img text-center">
                    <ArrowSvg />
                  </div>
                </div>
                <div className="small-group">
                  <InputGroup>
                    <Input type="text" placeholder="30" />
                    <InputGroupText className=" bg-transparent">{BTC}</InputGroupText>
                  </InputGroup>
                </div>
              </FormGroup>
              <FormGroup className="d-block mb-0">
                <Label> {Total} </Label>
                <InputGroup>
                  <Input type="text" placeholder="58794,53" />
                  <InputGroupText className=" bg-transparent">{TUSD}</InputGroupText>
                </InputGroup>
              </FormGroup>
              <FormGroup className="mb-0 ">
                <Button color="primary" className="d-block w-100 text-center">
                  {BuyNow}
                </Button>
              </FormGroup>
            </Form>
          </div>
        </TabPane>
      </TabContent>
    </CardBody>
  );
};
export default BuyForm;
