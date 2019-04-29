import * as React from "react";
import Links from "./components/Links";

const App = () => {
  const title = "(´・ω・｀)やあ";
  const message = "以下のリンクのどれかを選ぶとええぞ…";

  return (
    <div className="wrapper">
      <div className="container">
        <h1>{title}</h1>
        <p>{message}</p>
        <Links />
      </div>
    </div>
  );
};

export default App;
