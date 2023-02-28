import React from "react";
import styles from "../styles/Feedback.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";
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
        <div className={styles.player}>
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_ebqz3ltq.json"
            style={{ height: "200px", width: "200px" }}
          ></Player>
        </div>
        <div className={styles.title}>
          <h1>
            Не стесняйся связываться со мной - я буду только рад пообщаться!
          </h1>
        </div>
        <form className={styles.form}>
          <div className={styles.name_email}>
            <div className={styles.name}>
              <label>Name</label>
              <input type="text" name="user_name" />
            </div>
            <div className={styles.email}>
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>
          <div className={styles.message}>
            <label>Message</label>
            <textarea name="message" />
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
