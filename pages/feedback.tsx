import React from "react";
import styles from "../styles/Feedback.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";

const Feedback = () => {
  const form = React.useRef<any>("");
  console.log(form.current);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o94h4x4",
        "template_s54apn4",
        form.current,
        "K1etVHiF8biZH6T9W"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
        <form ref={form} className={styles.form} onSubmit={sendEmail}>
          <div className={styles.name_email}>
            <div className={styles.name}>
              <label>Name</label>
              <input type="text" name="fullname" />
            </div>
            <div className={styles.email}>
              <label>Email</label>
              <input type="email" name="user_email" />
            </div>
          </div>
          <div className={styles.message}>
            <label>Message</label>
            <textarea maxLength={250} minLength={5} name="message" />
          </div>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
