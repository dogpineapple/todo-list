import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import { v4 as uuid } from 'uuid';
import Todo from './Todo';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const generateTasks = () => {
    return tasks.map(task => (
      <Todo key={task.id}
        id={task.id}
        task={task.task}
        completed={task.completed}
        editTask={editTask}
        deleteTask={deleteTask}
        completeTask={completeTask}
        isEdit={false} />
    ));
  }

  const addTask = (data) => {
    data.id = uuid();
    data.completed = false;
    setTasks(currTasks => [...currTasks, data]);
  }

  const deleteTask = (id) => {
    setTasks(currTasks => currTasks.filter(currTask => currTask.id !== id));
  }

  const editTask = (data, id) => {
    let taskIdx = tasks.findIndex(task => task.id === id);

    setTasks((currTasks) => {
      let editTask = [...currTasks];
      editTask[taskIdx] = { task: data, id, completed: editTask[taskIdx].completed };

      return editTask;
    });
  }

  const completeTask = (id) => {
    let taskIdx = tasks.findIndex(task => task.id === id);

    setTasks((currTasks) => {
      let completeTask = [...currTasks];
      completeTask[taskIdx] = { task: completeTask[taskIdx].task, id, completed: !completeTask[taskIdx].completed };

      return completeTask;
    });
    console.log(tasks);
  }

  return (
    <div>
      <NewTodoForm addTask={addTask} />
      <ul>
        {generateTasks()}
      </ul>
    </div>
  );
}

export default TodoList;