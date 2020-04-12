import * as React from "react";
import Links from "./components/Links";
import styled from "styled-components";

const RootWrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic",
    YuGothic, "ヒラギノ角ゴ", sans-serif;
  display: flex;
`;

const Wrapper = styled.div`
  width: 80rem;
  margin: 7.5rem auto;
`;

const App = () => {
  const title = "(´・ω・｀)やあ";
  const message = "以下のリンクのどれかを選ぶとええぞ…";

  return (
    <RootWrapper>
      <Wrapper>
        <h1>{title}</h1>
        <p>{message}</p>
        <Links />
      </Wrapper>
    </RootWrapper>
  );
};

export default App;
