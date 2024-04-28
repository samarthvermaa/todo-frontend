import { useState } from "react";
import axios from "axios";

const CreateTodo = ({ fetchTodos }) => {
  const [todo, setTodo] = useState({ title: "", description: "" });
  const onInputChange = (event) => {
    setTodo((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };
  const onClickAddTodo = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/my/todo", {
        ...todo,
      });
      if (data) {
        alert("Todo added successfully");
        fetchTodos();
        setTodo({ title: "", description: "" });
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="title"
          placeholder="title"
          onChange={onInputChange}
          value={todo.title}
        />
      </div>
      <div>
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={onInputChange}
          value={todo.description}
        />
      </div>
      <div>
        <button onClick={onClickAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default CreateTodo;
