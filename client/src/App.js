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
  //todoItem 상태에 특정 투두를 삭제 하는 일
  const deleteItem = (targetItems) => {
    const newTodoItems = todoItems.filter((item)=> item.id !== targetItems.id);
    setTodoItems(newTodoItems);
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
