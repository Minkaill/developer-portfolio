import React from "react";
import styles from "../styles/Feedback.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

const Feedback = () => {
  const form = React.useRef<any>("");
  const router = useRouter();

  const [successfully, setSuccessfully] = React.useState<boolean>(false);
  const [feedback, setFeedBack] = React.useState<any>({
    fullname: "",
    user_email: "",
    message: "",
  });

  const feedBackFormChange = ({ target }: any) => {
    const { name, value } = target;
    setFeedBack((currentFeedBack: any) => ({
      ...currentFeedBack,
      [name]: value,
    }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (
      feedback.fullname.length > 3 &&
      feedback.user_email.length > 5 &&
      feedback.message.length > 5
    ) {
      emailjs
        .sendForm(
          "service_o94h4x4",
          "template_s54apn4",
          form.current,
          "5GLkd1X00PeaZjACZ"
        )
        .then(
          (result) => {
            console.log(result.text);
            if (result.text === "OK") {
              setSuccessfully(true);
              setTimeout(() => {
                router.push("/");
              }, 6400);
            }
          },
          (error) => {
            alert({
              Error: "Не удалось отправить сообщение!",
            });
            console.warn(error.text);
          }
        );
    } else {
      alert("Не удалось отправить сообщение! Убедитесь в заполнении полей!");
    }
  };

  if (successfully === false) {
    return (
      <div className={styles.wrapper}>
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
                <input
                  type="text"
                  onChange={feedBackFormChange}
                  value={feedback.fullname}
                  name="fullname"
                />
              </div>
              <div className={styles.email}>
                <label>Email</label>
                <input
                  type="email"
                  onChange={feedBackFormChange}
                  value={feedback.user_email}
                  name="user_email"
                />
              </div>
            </div>
            <div className={styles.message}>
              <label>Message</label>
              <textarea
                maxLength={250}
                onChange={feedBackFormChange}
                value={feedback.message}
                minLength={5}
                name="message"
              />
            </div>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.successfully}>
      <div>
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_vkygmedu.json"
          style={{ height: "300px", width: "300px" }}
        ></Player>
      </div>
    </div>
  );
};

export default Feedback;
