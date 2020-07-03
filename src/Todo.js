import React, { useState } from 'react';
import EditForm from './EditForm'

function Todo({ id, task, completed, deleteTask, editTask, completeTask }) {
  const [isEdit, setEdit] = useState(false);

  const handleDelete = () => {
    deleteTask(id);
  }

  const handleEdit = () => {
    setEdit(!isEdit);
  }

  const handleMark = () => {
    completeTask(id);
  }

  return (
    <li style={completed ? { textDecoration:"line-through" } : null}>
      {task}
      <button onClick={handleMark}>Mark as completed</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>X</button>
      {isEdit ? <EditForm id={id} editTask={editTask} handleEdit={handleEdit} /> : null}
    </li>
  );
}

export default Todo;
