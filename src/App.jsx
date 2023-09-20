import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [progress, setProgress] = useState("choose");
  const [todoList, setTodoList] = useState({
    todoTitle: "",
    todoDate: "",
    todoProgress: "",
  });

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  console.log(title, "title");

  function handleDate(event) {
    setDate(event.target.value);
  }
  console.log(date, "date");

  function handleProgress(event) {
    setProgress(event.target.value);
  }
  function handleSubmit() {
    setTodoList({
      todoTitle: title,
      todoDate: date,
      todoProgress: progress,
    });
  }
  console.log(todoList, "todoList");

  return (
    <div className="App">
      <br />
      <form>
        <label>
          Title:
          <span> </span>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleTitle}
          />
        </label>
        <br />
        <br />
        <label>
          Date:
          <span> </span>
          <input type="date" name="date" value={date} onChange={handleDate} />
        </label>
        <br />
        <br />
      </form>
      <label>
        Progress:
        <span> </span>
        <select name="progress" value={progress} onChange={handleProgress}>
          <option disabled>choose</option>
          <option>in progress</option>
          <option>done</option>
          <option>not started</option>
        </select>
      </label>
      <span> </span>
      <button onClick={handleSubmit}>Submit</button>
      <h1>To do list</h1>

      <table className="table">
        <tr>
          <td>{todoList.todoTitle}</td>
          <td>{todoList.todoDate}</td>
          <td>{todoList.todoProgress}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
