import BaseButton from "./BaseButton";
import Classes from "./BaseForm.module.css";
import { useRef } from "react";
const BaseForm = function (props) {
  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSubmit.call(this, {
          name: name.current.value,
          email: email.current.value,
          subject: subject.current.value,
          message: message.current.value,
        });
      }}
      className={Classes.form}
    >
      <div className={Classes.entry}>
        <input
          type="text"
          className={
            props.nameError
              ? `${Classes.error} ${Classes.input} `
              : Classes.input
          }
          placeholder="Name"
          name="name"
          ref={name}
        />
        <input
          type={"email"}
          className={
            props.emailError
              ? `${Classes.error} ${Classes.input} `
              : Classes.input
          }
          placeholder="Email"
          name="email"
          ref={email}
        />
      </div>
      <div className={Classes.entry}>
        <input
          type="text"
          className={Classes.input}
          placeholder="Subject"
          name="subject"
          ref={subject}
        />
      </div>
      <div className={Classes.entry}>
        <textarea
          className={
            props.messageError
              ? `${Classes.error} ${Classes.textarea} `
              : Classes.textarea
          }
          placeholder="Message"
          name="message"
          ref={message}
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
