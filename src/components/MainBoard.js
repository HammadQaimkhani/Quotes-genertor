import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { Button } from "@material-ui/core";

function MainBoard() {
  const [quotes, takeQuotes] = useState("");
  const [author, getAuthor] = useState("");
  let finalData = "";
  let finalAuthor = "";

  const randomQuotes = () => {
    let randomNum = Math.floor(Math.random() * 1643);
    finalData = finalData[randomNum].text;
    finalAuthor = finalAuthor[randomNum].author;
    takeQuotes(finalData);
    getAuthor(finalAuthor);
  };

  const getQuotes = async () => {
    let api = "https://type.fit/api/quotes";
    let data = await fetch(api);
    finalData = await data.json();
    finalAuthor = finalData;
    randomQuotes();
  };
  useEffect(() => {
    getQuotes();
  }, []);
  return (
    <Wrapper>
      <h1>QUOTES APP</h1>
      <Container>
        <QuotesWrapper>
          <Quotes>
            <h3>{quotes}</h3>
            <h2>{`Author : ${author}`}</h2>
            <Button
              variant='outlined'
              color='secondary'
              className='btn'
              onClick={getQuotes}>
              GET QUOTES
            </Button>
          </Quotes>
        </QuotesWrapper>
      </Container>
    </Wrapper>
  );
}

export default MainBoard;

const Wrapper = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 121, 78, 0.7063200280112045) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  max-width: 100vw;
  height: 100vh;
  padding-top: 20px;

  h1 {
    display: flex;
    justify-content: center;
    color: #000;
    font-family: "Poppins";
    letter-spacing: 2px;
    font-size: 40px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuotesWrapper = styled.div`
  display: flex;
  width: 80vw;
  height: 57vh;
  margin-top: 50px;
  background-color: rgb(248, 106, 105);
`;

const Quotes = styled.div`
  display: flex;
  margin: 30px;
  margin-left: 40px;
  width: 100%;
  position: relative;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    letter-spacing: 2px;
    font-family: "Poppins";
    color: black;
  }
  h2 {
    position: absolute;
    bottom: 0px;
    font-size: 30px;
    font-family: "Poppins";
    color: black;
  }
  .btn {
    position: absolute;
    bottom: 0px;
    right: 0px;
    color: #000;
    font-family: "Poppins";
    letter:spacing:2px;
    font-weight: 600;
    font-size:20px;
  }
`;
