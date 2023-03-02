import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.scss";
import { BsTelegram, BsGithub, BsDiscord } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  const [copyNone, setCopyNone] = React.useState<boolean>(false);
  const copy = async () => {
    await navigator.clipboard.writeText("Minkail#5834");
    setCopyNone(true);
    setTimeout(() => {
      setCopyNone(false);
    }, 2000);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contact_us}>
        <h1>Начать проект</h1>
        <p>
          Заинтересованы в совместной работе?
          <br /> Мы должны назначить время, чтобы пообщаться.
        </p>
        <Link href="/feedback">
          <button>Let's do this!</button>
        </Link>
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
          {copyNone && <h1>СКОПИРОВАНО</h1>}
          <BsDiscord onClick={() => copy()} />
        </div>

        <div className={styles.license}>
          <p>
            Handcrafted by me ©
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
