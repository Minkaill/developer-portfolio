import React from "react";
import styles from "../styles/Position.module.scss";
import { FC } from "react";
import { IUser } from "@/types";
import { animate, spring } from "motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Position: FC<IUser> = ({ position }) => {
  React.useEffect(() => {
    animate(
      `.${styles.container}`,
      { y: [-50, 0] },
      { y: { easing: spring({ velocity: 1200 }) } }
    );
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>{position.position[0].title}</h1>
        <p>{position.title}</p>
      </div>

      <div className={styles.photo}>
        <Player
          autoplay
          loop
          src="https://assets10.lottiefiles.com/packages/lf20_fnfwn222.json"
          style={{ height: "500px", width: "500px" }}
        ></Player>
      </div>
    </div>
  );
};

export default Position;
