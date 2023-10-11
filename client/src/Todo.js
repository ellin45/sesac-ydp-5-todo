import React from 'react';

export default function Todo({ item }) {
  const { id, title, done } = item;

  const onDeleteButtonClick = ({deleteItem}) => {
    deleteItem()
  }
  return (
    <div>
      <input
        type="checkbox"
        name={`todo${id}`}
        id={`todo${id}`}
        defaultChecked={done}
      ></input>
      <label htmlFor={`todo${id}`}>{title}</label>
      <button onClick={onDeleteButtonClick}>DELETE</button>
    </div>
  );
}
