import React from "react";
import styles from "../styles/Sidebar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { INavigation } from "../types";

const navigation: INavigation[] = [
  { id: 1, title: "Обо мне", path: "/aboutme" },
  { id: 2, title: "Навыки", path: "/naviki" },
  { id: 3, title: "Таймлайн", path: "/timeline" },
  { id: 4, title: "Проекты", path: "/projects" },
  { id: 5, title: "Конакты", path: "/contacts" },
];

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.webp" width={103} height={103} alt="logo" />
        </Link>
      </div>

      <ul className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <li key={id}>
            <Link href={`/${path}`}>
              <span>{id}</span>. {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
