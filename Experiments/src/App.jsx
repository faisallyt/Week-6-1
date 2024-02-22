import { useEffect, useState } from "react";

function App() {
  const [todo, setTodos] = useState([]);
  useEffect(() => {
    fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
      const data = await res.json();
      console.log(data);
      setTodos(data.todos);
    });
  }, []);
  return (
    <div>
      {todo.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
