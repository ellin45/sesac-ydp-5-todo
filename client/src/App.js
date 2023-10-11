import { useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: 'my todo1',
      done: false,
    },
    {
      id: 2,
      title: 'my todo2',
      done: false,
    },
    {
      id: 3,
      title: 'my todo3',
      done: true,
    },
    {
      id: 4,
      title: '백엔드 연습',
      done: false,
    },
  ]);

  const addItem = (newItem) => {
    console.log(newItem);

    newItem.id = todoItems.length + 1;
    newItem.done = false;

    setTodoItems([...todoItems, newItem]);
  };
  //과제 목록 삭제하기
  const deleteItem = (setTodoItems) => {
    setTodoItems.filter((setTodoItems) => (deleteItem = { deleteItem }));
  };
  return (
    <div className="App">
      <AddTodo addItem={addItem} />
      {todoItems.map((item) => (
        <Todo key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default App;
