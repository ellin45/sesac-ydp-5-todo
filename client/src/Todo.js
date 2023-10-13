import React, { useState } from 'react';
import './styles/Todo.scss';
export default function Todo({ item, deleteItem, updateItem }) {
  const [todoItem, setTodoItem] = useState(item);
  const { id, title, done } = todoItem;
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
      updateItem(todoItem); // 엔터키 누르면 저장
    }
  };
  //Checkbox 상태 업데이트
  const checkboxEventHandler = (e) => {
    const { done, ...rest } = todoItem;
    updateItem({
      done: e.target.checked,
      ...rest,
    });
    setTodoItem(updateItem);
    updateItem(updateItem); // 체크박스 변경시 저장
  };

  return (
    <div className='container'>
      <input
      className='checkbox'
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
        onClick={checkboxEventHandler}
      ></input>
      <input
      className='input'
        type="text"
        value={todoItem.title}
        readOnly={readOnly}
        onClick={offReadOnlyMode}
        onChange={editEventHandler}
        onKeyDown={editKeyEventHandler}
      ></input>
      <label htmlFor={`todo${id}`}></label>
      <button className='deleteBtn' onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
