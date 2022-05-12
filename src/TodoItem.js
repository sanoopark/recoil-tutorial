import React from "react";
import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { todoListState } from "./atoms";

const TodoItem = ({ item }) => {
  console.log("3. TodoItem rendered.");
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((todoItem) => todoItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItem = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isCompleted: !item.isCompleted,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = deleteItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <InputContainer>
      <input type="checkbox" checked={item.completed} onChange={toggleItem} />
      <input type="text" value={item.text} onChange={editItemText} />
      <button type="button" onClick={deleteItem}>
        삭제
      </button>
    </InputContainer>
  );
};

export default TodoItem;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const replaceItemAtIndex = (arr, index, newValue) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const deleteItemAtIndex = (arr, index) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};
