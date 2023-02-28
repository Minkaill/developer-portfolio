import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.scss";
import { BsTelegram, BsGithub, BsDiscord } from "react-icons/bs";

const Footer = () => {
  const copy = async () => {
    await navigator.clipboard.writeText("Minkail#5834");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contact_us}>
        <h1>Начать проект</h1>
        <p>
          Заинтересованы в совместной работе?
          <br /> Мы должны назначить время, чтобы пообщаться.
        </p>
        <button>Давайте сделаем это!</button>
      </div>

      <div className={styles.title}>
        <div className={styles.logo}>
          <Image src="/short.png" width={60} height={60} alt="logo" />
          <p>Живу, учусь и повышаю уровень день за днем.</p>
        </div>

        <div className={styles.links}>
          <a href="https://t.me/mklhdv" target="_blank">
            <BsTelegram />
          </a>
          <a href="https://github.com/Minkaill" target="_blank">
            <BsGithub />
          </a>
          <BsDiscord onClick={() => copy()} />
        </div>

        <div className={styles.license}>
          <p>
            Ручная работа от
            <a href="https://github.com/Minkaill" target="_blank">
              Minkail
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
