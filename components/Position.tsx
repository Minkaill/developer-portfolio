import React from "react";
import styles from "../styles/Position.module.scss";
import Image from "next/image";
import { animate, spring, timeline } from "motion";

const Position = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Frontend Developer</h1>
        <p>
          Я разрабатываю и кодирую на React, и мне нравится то, что я делаю.
        </p>
      </div>

      <div className={styles.photo}>
        <Image src="/mf-avatar.svg" width={210} height={230} alt="me" />
      </div>

      <div className={styles.devices}>
        <Image src="/hero-devices.svg" width={860} height={360} alt="devices" />
      </div>
    </div>
  );
};

export default Position;
