import React from "react";
import { animate, spring } from "motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Error = () => {
  React.useEffect(() => {
    animate(
      `.error`,
      { y: [300, 0] },
      { y: { easing: spring({ velocity: 300 }) } }
    );
  }, []);
  return (
    <div className="error">
      <div className="error_item">
        <h1>Ошибка 404</h1>
        <h4>
          Кажется что-то пошло не так! Страница, которую вы запрашиваете, не
          существует. Возможно она устарела, была удалена, или был введен
          неверный адрес в адресной строке.
        </h4>
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_dmg4fpyw.json"
          style={{ height: "500px", width: "500px" }}
        ></Player>
      </div>
    </div>
  );
};

export default Error;
