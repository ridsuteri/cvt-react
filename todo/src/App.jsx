import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const deleteTask = (toDelete) => {
    console.log("item to be deleted", toDelete);
    const newArray = todo.filter((item) => item.id != toDelete);
    console.log("newArray", newArray);
    setTodo(newArray);
  };

  const toggleCompleted = (id) => {
    const updatedArray = todo.map((item) => {
      return item.id === id ? { ...item, completed: !item.completed } : item;
    });
    setTodo(updatedArray);
  };

  const addTask = (e) => {
    e.preventDefault();
    let trimmed = task.trim();
    if (trimmed != "") {
      if (editMode) {
        
        //  look for the editId in list
        // change it's task to what is coming from input
        const updatedTask = todo.map((item)=>{
          return item.id == editId ? { ...item , task: trimmed} : item
        })
        setTodo(updatedTask);
        toast.success('Task updated successfully')
        setEditMode(false);
      } else {
        setTodo((prev) => [
          ...prev,
          { id: Date.now(), task, completed: false },
        ]);
        toast.success("Task added successfully");
        
      }
      setTask("");
    } else {
      toast.error("You can't add/update empty task");
    }
  };

  const editTask = (item) => {
    setEditMode(true);
    setEditId(item.id);
    setTask(item.task);
  };

  return (
    <div>
      <ToastContainer />
      <form onSubmit={addTask}>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}
          placeholder="enter task here"
          value={task}
        />
        <button type="submit">{ editMode ? 'Update' : 'Add'}</button>
      </form>
      <hr />
      <h3>Pending Tasks</h3>
      <ol>
        {todo.map((item) =>
          !item.completed ? (
            <li>
              {" "}
              {item.task} <button onClick={() => deleteTask(item.id)}>X</button>{" "}
              <button onClick={() => toggleCompleted(item.id)}>
                Mark as completed
              </button>
              <button onClick={() => editTask(item)}>Edit</button>
            </li>
          ) : (
            <></>
          )
        )}
      </ol>

      <hr />
      <h3>Completed Tasks</h3>
      <ol>
        {todo.map((item) =>
          item.completed ? (
            <li>
              {item.task} <button onClick={() => deleteTask(item.id)}>X</button>{" "}
              <button onClick={() => toggleCompleted(item.id)}>
                Mark as pending
              </button>
            </li>
          ) : (
            <></>
          )
        )}
      </ol>
    </div>
  );
}

export default App;
