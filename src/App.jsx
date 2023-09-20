import "./App.css";
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState({
    todoTitle: "",
    todoDate: "",
    todoProgress: "",
  });
  const [todoListArray, setTodoListArray] = useState([]);

  function handleTitle(event) {
    setTodoList({ ...todoList, todoTitle: event.target.value });
  }

  function handleDate(event) {
    setTodoList({ ...todoList, todoDate: event.target.value });
  }

  function handleProgress(event) {
    setTodoList({ ...todoList, todoProgress: event.target.value });
  }
  function addTodo() {
    setTodoListArray([...todoListArray, todoList]);
  }
  }


  function addTodo() {
    const list = todoListArray;
    list.push(todoList);
    setTodoListArray([...todoListArray, todoList]);
  }

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
        <select name="progress" value={todoList.todoProgress} onChange={handleProgress}>
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
