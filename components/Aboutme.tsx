import React from "react";
import styles from "../styles/Aboutme.module.scss";
import { FC } from "react";
import { animate, spring } from "motion";
import { IUser } from "@/types";

const Aboutme: FC<IUser> = ({ aboutme }) => {
  React.useEffect(() => {
    animate(
      `.${styles.text}`,
      { x: [-1300, 0] },
      { x: { easing: spring({ velocity: 1500 }) } }
    );
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>{aboutme.title}</h1>
        <p>{aboutme.text}</p>
      </div>
    </div>
  );
};

export default Aboutme;
