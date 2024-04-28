import axios from "axios";
import CreateTodo from "./components/CreateTodo";
import DisplayTodos from "./components/DisplayTodos";
import { useEffect, useState } from "react";

function App() {
  const [myTodos, setMyTodos] = useState([]);
  const fetchTodos = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/my/todos");
      if (data) {
        setMyTodos(data.todos);
      } else {
        alert("something went wrong while fetching todos");
      }
    } catch (error) {
      alert("something error happened while fetching todos");
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <CreateTodo fetchTodos={fetchTodos} />
      <DisplayTodos todos={myTodos} fetchTodos={fetchTodos} />
    </div>
  );
}

export default App;
