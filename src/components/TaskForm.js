import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../context/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext,
  );

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={handleChange}
          value={title}
          type="text"
          className="task-input"
          placeholder="Add Task"
          required
        />
        <div className="buttons">
          <button type="submit" className="btn add-task-btn">
            {editItem ? 'Edit Task' : 'Add Task'}
          </button>
          <button
            onClick={clearList}
            type="submit"
            className="btn clear-btn"
          >
            Clear Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
