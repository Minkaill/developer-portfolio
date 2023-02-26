import React from "react";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { animate, spring } from "motion";

const Header = () => {
  React.useEffect(() => {
    animate(
      "header",
      { y: [-200, 0] },
      { y: { easing: spring({ velocity: 500 }) } }
    );
  }, []);
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
