import React, { useState } from 'react';
import './styles/AddTodo.scss';
export default function AddTodo({ addItem }) {
  const [todoItem, setTodoItems] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItems({
      title: '',
    });
    // input초기화
  };

  return (
    <div className="container">
      <div className="AddTodo">
        <input
          className="input"
          type="text"
          placeholder="Add your new todo"
          value={todoItem.title}
          onChange={(e) => setTodoItems({ title: e.target.value })}
        />
        <button className="addBtn" onClick={onButtonClick}>
          ADD
        </button>
      </div>
    </div>
  );
}
