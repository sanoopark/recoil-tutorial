import React, { useState } from "react";
import styled from "@emotion/styled";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./atoms";

const TodoItemCreator = () => {
  console.log("2. TodoItemCreator rendered.");
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <Container>
      <input type="text" value={inputValue} onChange={onChange} />
      <button type="button" onClick={addItem}>
        추가
      </button>
    </Container>
  );
};

export default TodoItemCreator;

let id = 0;
function getId() {
  return id++;
}

const Container = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;
