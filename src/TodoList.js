import React from "react";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import { todoListState } from "./atoms";

const TodoList = () => {
  console.log("1. TodoList rendered.");
  const todoList = useRecoilValue(todoListState);

  return (
    <TodoListWrapper>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;

const TodoListWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
