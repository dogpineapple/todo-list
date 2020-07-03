import React, {useState} from 'react';

function EditForm({ id, editTask, handleEdit }) {
  const initialState = { task: "" };
  const [formData, setForm] = useState(initialState);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setForm({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(formData.task, id);
    handleEdit();
    console.log("submit edit...", formData.task);
    setForm(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task</label>
      <input name="task" id="task" value={formData.task} onChange={handleChange}/>
      <button>Submit edit</button>
    </form>
  );
}

export default EditForm;