import React from "react";
import styles from "../styles/Feedback.module.scss";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const form = React.useRef<HTMLFormElement | string>("");
  console.log(form);

  //   const sendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     e.preventDefault();

  //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //       .then((result) => {
  //           console.log(result.text);
  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   };

  return (
    <div className={styles.wrapper}>
      <hr />
      <div className={styles.feedback}>
        <div className={styles.title}>

        </div>
        <form className={styles.form}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Feedback;
