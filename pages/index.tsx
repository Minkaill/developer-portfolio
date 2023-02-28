import Aboutme from "@/components/Aboutme";
import Position from "@/components/Position";
import styles from "../styles/Home.module.scss";
import axios from "axios";
import { animate, scroll } from "motion";
import React from "react";
import Stack from "@/components/Stack";
import { IUser } from "@/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Companies from "../components/Companies";
import Footer from "@/components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(`${process.env.API_HOST}/user/`);
  const user: IUser[] = data;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { user },
  };
};

const Home = ({ user }: InferGetStaticPropsType<typeof getStaticProps>) => {
  React.useEffect(() => {
    scroll(animate(".progress", { scaleX: [0, 1] }));
  }, []);
  return (
    <div className={styles.wrapper}>
      <Position {...user} />
      <Aboutme {...user} />
      <Stack {...user} />
      <Companies {...user} />
      <Footer />
      <div
        className="progress"
        style={{ transform: "scaleX(var(--motion-scaleX))" }}
      ></div>
    </div>
  );
};

export default Home;
