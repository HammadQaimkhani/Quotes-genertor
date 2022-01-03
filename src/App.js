import React from "react";
import styled from "styled-components";
import MainBoard from "./components/MainBoard";
import "./app.css";

function App() {
  return (
    <Wrapper>
      <MainBoard />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  margin:0;
  padding:0;
  box-sizing-border-box
`;
