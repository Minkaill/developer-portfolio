import Aboutme from "@/components/Aboutme";
import Position from "@/components/Position";
import styles from "../styles/Home.module.scss";
import { animate, scroll } from "motion";
import React from "react";
import Stack from "@/components/Stack";

const Home = () => {
  React.useEffect(() => {
    scroll(animate(".progress", { scaleX: [0, 1] }));
  }, []);
  return (
    <div className={styles.wrapper}>
      <Position />
      <Aboutme />
      <Stack />
      <div
        className="progress"
        style={{ transform: "scaleX(var(--motion-scaleX))" }}
      ></div>
    </div>
  );
};

export default Home;
