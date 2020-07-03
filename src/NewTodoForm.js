import React, { useState } from 'react';

function NewTodoForm({ addTask }) {
  const initialState = { task: "", completed: false};
  const [formData, setForm] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    setForm(initialState);

  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Create task</label>
      <input name="task" id="task" value={formData.task} onChange={handleChange} />
      <button>Create</button>
    </form>
  )
}

export default NewTodoForm;