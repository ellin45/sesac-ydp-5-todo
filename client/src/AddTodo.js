import React, { useState } from 'react';

export default function AddTodo({addItem}) {
  const [todoItem, setTodoItems] = useState({
    title: '',
  });

  const onButtonClick = () => {
    addItem(todoItem);
    setTodoItems({
      title:''
    })
    // input초기화
  };

    return (
    <div className="AddTodo">
      <input
        type="text"
        placeholder="Add your new todo"
        value={todoItem.title}
        onChange={(e) => setTodoItems({ title: e.target.value })}
      />
      <button onClick={onButtonClick}>ADD</button>
    </div>
  );
}
