import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BrowserDefaults, SubmitForm } from "@/Constant";
import { BrowserDefaultsFormSubHeading } from "@/Data/Forms/FormControl";
import { Button, Card, CardBody, Form } from "reactstrap";
import AddressBrowserForm from "./AddressBrowserForm";
import CheckBoxBrowserForm from "./CheckBoxBrowserForm";
import PersonalDetailsBrowserForm from "./PersonalDetailsBrowserForm";

const BrowserDefaultsForm = () => {
  return (
    <Card>
      <CommonCardHeader heading={BrowserDefaults} subHeading={BrowserDefaultsFormSubHeading} />
      <CardBody>
        <Form onSubmit={() => alert("Your Details Are Saved")}>
          <PersonalDetailsBrowserForm />
          <AddressBrowserForm />
          <CheckBoxBrowserForm />
          <Button type="submit" color="primary">
            {SubmitForm}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default BrowserDefaultsForm;
