import React from "react";

const StartPage = ({ onStartClick }) => {
  return (
    <div style={{ width: 375 }}>
      <h2>Здравствуйте!</h2>
      <h2>Нажмите старт чтобы начать</h2>
      <button onClick={onStartClick}>Старт</button>
    </div>
  );
};

export default StartPage;
