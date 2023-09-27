import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import { useState } from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love you 3000" },
    { id: 2, title: "I love you 4000" },
    { id: 3, title: "I love you 5000" },
  ]);
  const handleTodoClick = (todo) => {
    console.log(todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };
  return (
    <div className="App">
      Reac-hook <br></br>
      <ColorBox />
      <br></br>
      TodoList
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
