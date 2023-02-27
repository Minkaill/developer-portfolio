import Aboutme from "@/components/Aboutme";
import Position from "@/components/Position";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { animate, scroll } from "motion";
import React from "react";
import Stack from "@/components/Stack";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(`${process.env.API_HOST}/user/`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user: data },
  };
};

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
