import React from "react";
import styles from "../styles/Stack.module.scss";
import Image from "next/image";

const Stack = () => {
  return (
    <div className={styles.container}>
      <div className={styles.stack}>
        <div className={styles.header}>
          <Image src="/code.png" width={60} height={60} alt="code" />
          <h1>Frontend</h1>
          <p>
            Мне нравится кодировать вещи с нуля, и мне нравится воплощать идеи в
            жизнь в браузере.
          </p>
        </div>
        <div className={styles.language}>
          <h4>Владею языками:</h4>
          <p>JavaScript, TypeScript, Node</p>
        </div>
        <div className={styles.dev_tools}>
          <h4>Инструменты разработчика:</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>HTML</li>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className={styles.stack}>
        <div className={styles.header}>
          <Image src="/code.png" width={60} height={60} alt="code" />
          <h1>Frontend</h1>
          <p>
            Мне нравится кодировать вещи с нуля, и мне нравится воплощать идеи в
            жизнь в браузере.
          </p>
        </div>
        <div className={styles.language}>
          <h4>Владею языками:</h4>
          <p>JavaScript, TypeScript, Node</p>
        </div>
        <div className={styles.dev_tools}>
          <h4>Инструменты разработчика:</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>HTML</li>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
      <hr />

      <div className={styles.stack}>
        <div className={styles.header}>
          <Image src="/code.png" width={60} height={60} alt="code" />
          <h1>Frontend</h1>
          <p>
            Мне нравится кодировать вещи с нуля, и мне нравится воплощать идеи в
            жизнь в браузере.
          </p>
        </div>
        <div className={styles.language}>
          <h4>Владею языками:</h4>
          <p>JavaScript, TypeScript, Node</p>
        </div>
        <div className={styles.dev_tools}>
          <h4>Инструменты разработчика:</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node</li>
            <li>HTML</li>
            <li>React</li>
            <li>Redux</li>
            <li>TypeScript</li>
            <li>Node</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Stack;
