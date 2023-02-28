import React from "react";
import styles from "../styles/Stack.module.scss";
import Image from "next/image";
import { FC } from "react";
import { animate, spring } from "motion";
import { IUser } from "@/types";

const Stack: FC<IUser> = ({ skills }) => {
  React.useEffect(() => {
    animate(
      `.${styles.container}`,
      { y: [100, 0] },
      { y: { easing: spring({ velocity: 500 }) } }
    );
  }, []);

  return (
    <div className={styles.container}>
      {skills.map(({ id, frontend }) => (
        <>
          <div key={id} className={styles.stack}>
            <div className={styles.header}>
              <Image src="/code.png" width={60} height={60} alt="code" />
              <h1>{frontend.position.position}</h1>
              <p>{frontend.position.title}</p>
            </div>
            <div className={styles.language}>
              <h4>Владею языками:</h4>
              <p>{frontend.language.map(({ name }) => name)}</p>
            </div>
            <div className={styles.dev_tools}>
              <h4>Инструменты разработчика:</h4>
              <ul>
                {frontend.dev_tools.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
        </>
      ))}
    </div>
  );
};

export default Stack;
