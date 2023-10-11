import { useState } from 'react';
import Todo from './Todo';
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
  ]);
  return (
    <div className="App">
    {todoItems.map((item)=><Todo key={item.id}item={item}/>)}
      

     
    </div>
  );
}

export default App;
