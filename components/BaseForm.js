import BaseButton from "./BaseButton";
import Classes from "./BaseForm.module.css";
const BaseForm = function (props) {
  return (
    <form onSubmit={props.onSubmit} className={Classes.form}>
      <div className={Classes.entry}>
        <input
          onChange={(v) => props.setName(v.target.value)}
          type="text"
          className={
            props.nameError
              ? `${Classes.error} ${Classes.input} `
              : Classes.input
          }
          placeholder="Name"
          name="name"
          value={props.name}
        />
        <input
          onChange={(v) => props.setEmail(v.target.value)}
          type={"email"}
          value={props.email}
          className={
            props.emailError
              ? `${Classes.error} ${Classes.input} `
              : Classes.input
          }
          placeholder="Email"
          name="email"
        />
      </div>
      <div className={Classes.entry}>
        <input
          onChange={(v) => props.setSubject(v.target.value)}
          type="text"
          value={props.subject}
          className={Classes.input}
          placeholder="Subject"
          name="subject"
        />
      </div>
      <div className={Classes.entry}>
        <textarea
          value={props.message}
          onChange={(v) => props.setMessage(v.target.value)}
          className={
            props.messageError
              ? `${Classes.error} ${Classes.textarea} `
              : Classes.textarea
          }
          placeholder="Message"
          name="message"
        ></textarea>
      </div>
      <div className={Classes.btn}>
        <BaseButton mode="button" type="submit" state="empty">
          {props.pending ? "In progress..." : "Send email"}
        </BaseButton>
      </div>
    </form>
  );
};

export default BaseForm;
