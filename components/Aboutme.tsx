import React from "react";
import styles from "../styles/Aboutme.module.scss";
import { FC } from "react";
import { IUser } from "@/types";

const Aboutme: FC<IUser> = ({ aboutme }) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>{aboutme?.title}</h1>
        <p>{aboutme?.text}</p>
      </div>
    </div>
  );
};

export default Aboutme;
