import BaseButton from "../../components/BaseButton";
import Classes from "./BaseForm.module.css";
const BaseForm = function () {
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
  </form>;
};

export default BaseForm;
