import BasePage from "../../components/BasePage";
import BaseForm from "../../components/BaseForm";

const Contact = function () {
  return (
    <BasePage title="Contact">
      <p>
        I am currenty looking for new job opportunities. However if you have a
        request or question, feel free to use this form.
      </p>
      <BaseForm />
    </BasePage>
  );
};

export default Contact;
