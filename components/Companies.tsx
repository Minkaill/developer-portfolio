import React from "react";
import styles from "../styles/Works.module.scss";
import Image from "next/image";
import { FC } from "react";
import { IUser } from "@/types";

const Companies: FC<IUser> = ({ companies }) => {
  return (
    <div className={styles.container}>
      <h1>
        Я горжусь тем, что сотрудничал с некоторыми потрясающими компаниями:
      </h1>
      <div className={styles.works}>
        {companies?.map(({ id, icon, name }) => (
          <div key={id} className={styles.company}>
            <Image src={icon} width={70} height={70} alt="comp" />
            <h2>{name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
