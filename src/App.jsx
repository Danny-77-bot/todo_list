import React, { useState } from 'react';

export default function App() {
  const [lists, setLists] = useState([]);
  const [task, setTask] = useState('');

  function handleChange(event) {
    setTask(event.target.value);
  }

  function addTask() {
    const item = {
      id: lists.length > 0 ? lists[lists.length - 1].id + 1 : 1,
      name: task,
      completed: false,
    };
    setLists([...lists, item]);
  }

  function deleteTask(id) {
    setLists(lists.filter((list) => list.id !== id));
  }

  function handleCheck(id) {
    setLists(
      lists.map((list) =>
        list.id === id ? { ...list, completed: !list.completed } : list
      )
    );
  }

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Your task"
      ></input>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(list.id)}
            />
            <span style={{ textDecoration: list.completed ? 'line-through' : 'none' }}>
              {list.name}
            </span>
            <button onClick={() => deleteTask(list.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}