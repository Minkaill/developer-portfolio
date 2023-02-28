import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact_us}></div>
      <div className={styles.logo}></div>
      <div className={styles.links}></div>
      <div className={styles.license}></div>
    </footer>
  );
};

export default Footer;
