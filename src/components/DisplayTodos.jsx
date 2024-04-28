import axios from "axios";

const DisplayTodos = ({ todos, fetchTodos }) => {
  const onCompletedClick = async (uuid) => {
    try {
      const { data } = await axios.put("http://localhost:3000/my/completed", {
        id: uuid,
      });

      if (data) {
        fetchTodos();
        alert("Todo marked completed successfully");
      } else {
        alert("Todo not marked completed successfully");
      }
    } catch (error) {
      alert("Error happened hence Todo not marked completed successfully");
    }
  };
  return (
    <>
      <h1>My Todos:-</h1>
      {todos &&
        todos.length > 0 &&
        todos.map((todo) => (
          <div
            key={todo.uuid}
            style={{
              border: "1px solid black",
              boxShadow: "100px",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <p>Completed:{todo.completed.toString()}</p>
            <button onClick={() => onCompletedClick(todo.uuid)}>
              Completed
            </button>
          </div>
        ))}
    </>
  );
};

export default DisplayTodos;
