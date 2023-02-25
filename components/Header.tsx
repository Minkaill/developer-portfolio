import React from "react";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <Image src="/short.png" width={60} height={60} alt="logo" />
        </Link>

        <div className={styles.links}>
          <Link href="/mentor">Наставничество</Link>
          <button>Обратная связь</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
