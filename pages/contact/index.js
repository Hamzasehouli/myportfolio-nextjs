import BasePage from "../../components/BasePage";
import BaseForm from "../../components/BaseForm";
import Head from "next/head";
import { useState, useRef, useEffect, useCallback } from "react";

const Contact = function () {
  // const [subjectError, setSubjectError] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState({ title: "", ok: false });

  let nameErrorModel = false;
  let emailErrorModel = false;
  let messageErrorModel = false;
  let formStatus = status ? (
    <p
      style={{
        color: status.ok ? "var(--color-success)" : "var(--color-error)",
        marginTop: "2rem",
      }}
    >
      {status.title}
    </p>
  ) : (
    ""
  );

  const handleSubmit = async function (obj) {
    try {
      setPending(true);
      setStatus({ title: "", ok: false });
      const { name, email, subject, message } = obj;

      if (name.trim() === "") {
        nameErrorModel = true;
      }
      if (
        email === "" ||
        !email.split("@")[1].includes(".") ||
        !email.includes("@")
      ) {
        emailErrorModel = true;
      }
      if (message === "") {
        messageErrorModel = true;
      }

      setEmailError(emailErrorModel);
      setNameError(nameErrorModel);
      setMessageError(messageErrorModel);

      if (nameErrorModel || emailErrorModel || messageErrorModel) {
        nameErrorModel = false;
        emailErrorModel = false;
        messageErrorModel = false;
        setStatus({ title: "Please fill all the required fields", ok: false });
        setPending(false);
        return;
      }

      const res = await fetch("api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          ...obj,
        }),
      });
      console.log(res);
      const data = await res.json();
      console.log(data);
      setStatus({ title: data.message, ok: true });
      setPending(false);
    } catch (err) {
      setStatus({ title: data.message, ok: false });
      setPending(false);
    }
  };
  return (
    <BasePage title="Contact">
      <Head>
        <title>Hamza Sehouli | Let&apos;s us hear from you</title>
      </Head>
      <section style={{ width: "60%" }}>
        <p>
          I am currenty looking for new job opportunities. However if you have a
          request or question, feel free to use this form.
        </p>
        <div>
          {formStatus}
          <BaseForm
            pending={pending}
            nameError={nameError}
            emailError={emailError}
            messageError={messageError}
            onSubmit={(obj) => handleSubmit(obj)}
          />
        </div>
      </section>
    </BasePage>
  );
};

export default Contact;
