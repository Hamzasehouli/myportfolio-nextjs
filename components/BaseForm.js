import BaseButton from "./BaseButton";
import Classes from "./BaseForm.module.css";
const BaseForm = function () {
  return (
    <form className={Classes.form}>
      <div className={Classes.entry}>
        <input type="text" className={Classes.input} placeholder="Name" />
        <input type={"email"} className={Classes.input} placeholder="Email" />
      </div>
      <div className={Classes.entry}>
        <input type="text" className={Classes.input} placeholder="Subject" />
      </div>
      <div className={Classes.entry}>
        <textarea className={Classes.textarea} placeholder="Message"></textarea>
      </div>
      <div className={Classes.btn}>
        <BaseButton mode="button" type="submit" state="empty">
          Send email
        </BaseButton>
      </div>
    </form>
  );
};

export default BaseForm;
