import { useState } from "react";
import "./App.css";

let counter = 4;
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "go to gym",
      description: "go to gym today",
    },
    {
      id: 2,
      title: "ead food",
      description: "eat your  food",
    },
    {
      id: 1,
      title: "go to class",
      description: "go to class  ",
    },
  ]);
  function addTodo() {
    setTodos([
      ...todos,
      {
        id: counter++,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
  }
  return (
    <div>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="description" />
      <button onClick={addTodo}>Add a todo Here</button>

      {todos.map((todo) => (
        <Todo
          title={todo.title}
          description={todo.description}
          key={todo.id}></Todo>
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
}

export default App;
