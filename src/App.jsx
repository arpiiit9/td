import React, { useState } from 'react';
import './index.css'; // Import Tailwind and custom CSS.

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const filteredTasks = tasks.filter((_, i) => i !== index);
    setTasks(filteredTasks);
  };

  return (
    <div className="bg-full-screen min-h-screen flex justify-center items-start">
      <div className="w-[500px] max-w-full mt-10 p-6 rounded-xl bg-black/60 backdrop-blur-md shadow-lg border border-gray-600">
        <h2 className="text-2xl font-semibold text-white text-center mb-4">
          Today's Task ✅
        </h2>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
            className="w-full px-4 py-2 rounded-md border border-gray-500 text-white bg-transparent placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleAddTask}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center px-4 py-2 rounded-md border ${
                task.completed
                  ? 'opacity-50 line-through'
                  : 'opacity-100'
              } bg-gray-800 text-white transition-opacity`}
            >
              <span
                onClick={() => toggleTaskCompletion(index)}
                className="cursor-pointer"
              >
                {task.text}
              </span>
              <div className="flex items-center gap-2">
                {task.completed && (
                  <span className="text-green-400">✔️</span>
                )}
                <button
                  onClick={() => handleDeleteTask(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;

//gasdg



