import React, { useState, useRef } from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  width: 90%;
  border-radius: 10px;
  text-align: center;
  color: ${(pr) => pr.theme.primaryColor};
`;

const style = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-evenly",
};

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 100%;
`;

const StyledInput = styled.input`
  color: black;
  width: 50%;
`;

const StyledButton = styled.button`
  width: 100px;
  background-color: ${(pr) => pr.theme.primaryColor};
  cursor: pointer;
  color: white;
  margin-top: 1rem;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: white;
    color: ${(pr) => pr.theme.tertiary};
  }
`;

let count = 1;

export default function Search({ setWhatDo }) {
  const [hasSomething, setHasSomething] = useState(null);
  const dateInputRef = useRef(null);

  const clearInput = () => {
    if (dateInputRef.current) {
      dateInputRef.current.value = "";
    }
    setHasSomething(null);
  };

  const reset = () => {
    clearInput();
    setWhatDo("");
  };

  const changeThing = (evt) => {
    evt.preventDefault();
    const val = dateInputRef.current.value;

    if (val[4] === "-" && val[7] === "-") {
      setWhatDo(`&date=${val}`);
    }
    clearInput();
  };

  const inputChange = () => {
    setHasSomething(dateInputRef.current?.value);
  };

  const setRandom = () => {
    setWhatDo(`&count=${count}`);
    count = count === 1 ? 2 : 1;
  };

  return (
    <StyledSearch>
      <p>
        From the APOD page: <br />
        Each day a different image or photograph of our fascinating universe is
        featured, <br />
        along with a brief explanation written by a professional astronomer.
      </p>

      <form onSubmit={changeThing} style={style}>
        <StyledLabel>
          Search Date
          <StyledInput
            type="text"
            ref={dateInputRef}
            onChange={inputChange}
            placeholder="YYYY-MM-DD"
          />
          {hasSomething && (
            <StyledButton type="submit"> search date </StyledButton>
          )}
        </StyledLabel>
        <StyledButton type="button" onClick={reset}>
          reset
        </StyledButton>
        <StyledButton type="button" onClick={setRandom}>
          random
        </StyledButton>
      </form>
    </StyledSearch>
  );
}
