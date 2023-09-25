import "./App.css";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItem] = useState({
    todoTitle: "",
    todoDate: "",
    todoProgress: "",
  });
  const [todoListArray, setTodoListArray] = useState([]);

  function handleTitle(event) {
    setTodoItem({ ...todoItem, todoTitle: event.target.value });
  }

  function handleDate(event) {
    setTodoItem({ ...todoItem, todoDate: event.target.value });
  }

  function handleProgress(event) {
    setTodoItem({ ...todoItem, todoProgress: event.target.value });
  }
  function addTodo() {
    setTodoListArray([...todoListArray, todoItem]);
  }

  todoListArray.map((newItem) => console.log(newItem, "newItem"));

  // function addTodo() {
  //   const list = todoListArray;
  //   list.push(todoList);
  //   setTodoListArray([...todoListArray, todoItem]);
  // }

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
            value={todoItem.todoTitle}
            onChange={handleTitle}
          />
        </label>
        <br />
        <br />
        <label>
          Date:
          <span> </span>
          <input
            type="date"
            name="date"
            value={todoItem.todoDate}
            onChange={handleDate}
          />
        </label>
        <br />
        <br />
      </form>
      <label>
        Progress:
        <span> </span>
        <select
          type="text"
          name="progress"
          value={todoItem.todoProgress}
          onChange={handleProgress}
        >
          <option selected>select</option>
          <option>not started</option>
          <option>in progress</option>
          <option>done</option>
        </select>
      </label>
      <span> </span>
      <button onClick={addTodo}>Submit</button>
      <h1>To do list</h1>

      <table className="table">
        <tr>
          {todoListArray.map((newItem) => (
            <>
              <td>{newItem.todoTitle}</td>
              <td>{newItem.todoDate}</td>
              <td>{newItem.todoProgress}</td>
            </>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;
