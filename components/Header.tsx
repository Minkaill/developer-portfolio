import React from "react";
import styles from "../styles/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <Link href="/">
            <Image src="/short.png" width={60} height={60} alt="logo" />
          </Link>

          <div className={styles.links}>
            <a
              href="https://hh.ru/resume_converter/%D0%A5%D0%B0%D0%B4%D0%B6%D0%B8%D0%B5%D0%B2%20%D0%9C%D0%B8%D0%BD%D0%BA%D0%B0%D0%B8%D0%BB.pdf?hash=b71d1eafff0b3e95a00039ed1f6f764c776d61&type=pdf&hhtmSource=resume&hhtmFrom="
              download
            >
              Резюме
            </a>
            <Link href="/feedback">
              <button>Обратная связь</button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
