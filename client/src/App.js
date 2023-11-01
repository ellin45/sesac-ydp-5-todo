import { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import axios from 'axios';
import './styles/App.scss';
function App() {
  // console.log(process.env.REACT_APP_DB_HOST);
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await axios.get(`${process.env.REACT_APP_DB_HOST}/api/todos`);
      setTodoItems(res.data);
    };

    getTodos();
  }, []);

  // todoItems 상태에 새로운 Todo 추가
  const addItem = async (newItem) => {
    // console.log(newItem);

    // //newItem id 키 값, newItem done 키 값 추가
    // newItem.id = todoItems.length + 1;
    // newItem.done = false;

    // // todoItems 배열에 newItem 추가
    // setTodoItems([...todoItems, newItem]);

    const res = await axios.post(
      `${process.env.REACT_APP_DB_HOST}/api/todo`,
      newItem
    );
    console.log(res);
    setTodoItems([...todoItems, newItem]);
  };

  const deleteItem = async (targetItem) => {
    await axios.delete(
      `${process.env.REACT_APP_DB_HOST}/api/todo/${targetItem.id}`
    );
    const newTodoItems = todoItems.filter((item) => item.id !== targetItem.id);
    setTodoItems(newTodoItems);
  };

  const updateItem = async (targetItem) => {
    await axios.patch(
      `${process.env.REACT_APP_DB_HOST}/todo/${targetItem.id}`,
      targetItem
    ); //axios.path('url',{})
  };
  return (
    <div className="App">
    <header className='header'>My Todo App</header>
      <AddTodo addItem={addItem} />
      <div className='count'>Todo개수 : {todoItems.length} 😃</div>
      {/* todoItems 반복, props(todo 객체)로 자식 컴포넌트에 데이터 전달 */}
      {todoItems.map((todoItems) => (
        <Todo
          key={todoItems.id}
          item={todoItems}
          deleteItem={deleteItem}
          updateItem={updateItem}
        />
      ))}
    </div>
  );
}

export default App;
