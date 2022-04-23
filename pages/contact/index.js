import BasePage from "../../components/BasePage";
import BaseButton from "../../components/BaseButton";
import Classes from "./Contact.module.css";
const Contact = function () {
  return (
    <BasePage title="Contact">
      <form className={Classes.form}>
        <div>
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
        <div>
          <input placeholder="Subject" />
        </div>
        <div>
          <textarea placeholder="Message"></textarea>
        </div>
        <BaseButton mode="button" type="submit" state="empty">
          Send
        </BaseButton>
      </form>
    </BasePage>
  );
};

export default Contact;
