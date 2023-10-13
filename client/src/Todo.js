import React, { useState } from 'react';

export default function Todo({ item, deleteItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const {id, title, done} = todoItem;
  const [readOnly, setReadOnly] = useState(true);

  const onDeleteButtonClick = () => {
    deleteItem(todoItem);
  };

  const offReadOnlyMode = () => {
    setReadOnly(false);
  };
  //title 수정
  const editEventHandler = (e) => {
    const { title, ...rest } = todoItem;
    setTodoItem({
      title: e.target.value,
      ...rest,
    });
  };
  //Enter 키 누르면 readOnly true 변경
  const editKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      setReadOnly(true);
    }
  };
  //Checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    setTodoItem({
      done: e.target.checked,
      ...rest,
    });
    console.log(e);
  };
  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onClick={checkboxEventHandler}
      ></input>
      <input
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      ></input>
      <label htmlFor={`todo${id}`}></label>
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
