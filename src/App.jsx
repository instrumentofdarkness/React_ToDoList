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

    // setTodoListArray to empty
    setTodoItem({ todoTitle: "", todoDate: "", todoProgress: "" });
  }

  todoListArray.map((newItem) => console.log(newItem, "newItem"));

  // function addTodo() {
  //   const list = todoListArray;
  //   list.push(todoList);
  //   setTodoListArray([...todoListArray, todoItem]);
  // }

  function deleteTodoItem(todoItem) {
    const result = todoListArray.filter(
      (todoItem) => todoItem.todoTitle !== todoItem.todoTitle
    );
    setTodoListArray(result);
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
          <option value="notStarted">not started</option>
          <option value="inProgress">in progress</option>
          <option value="done">done</option>
        </select>
      </label>
      <span> </span>
      <button onClick={addTodo}>Submit</button>

      <h1>To do list</h1>

      <table className="table">
        <tr>
          {todoListArray.map((newItem) => (
            <>
              <td className={newItem.todoProgress}>{newItem.todoProgress}</td>
              <td>{newItem.todoTitle}</td>
              <td>{newItem.todoDate}</td>
              <button onClick={() => deleteTodoItem()}>delete</button>
            </>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;
