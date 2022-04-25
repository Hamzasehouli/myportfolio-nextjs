import BasePage from "../../components/BasePage";
import BaseForm from "../../components/BaseForm";
import Head from "next/head";
import { useState, useRef, useEffect, useCallback } from "react";

const Contact = function () {
  // const [subjectError, setSubjectError] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  let nameErrorModel = false;
  let emailErrorModel = false;
  let messageErrorModel = false;

  const handleSubmit = async function (obj) {
    try {
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
        return;
      }
      console.log("fgooooooo");

      const res = fetch("api/sendEmail", {
        method: "POST",
        body: JSON.stringify({
          ...obj,
        }),
      });
    } catch (err) {}
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
        <BaseForm
          nameError={nameError}
          emailError={emailError}
          messageError={messageError}
          onSubmit={(obj) => handleSubmit(obj)}
        />
      </section>
    </BasePage>
  );
};

export default Contact;
