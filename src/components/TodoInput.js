import { useState } from "react";

const TodoInput = ({ onAddTodo }) => {
  const  [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    onAddTodo({
      id: Date.now(),
      text: newTodo,
      completed: false,
    })

    setNewTodo('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addTodo();
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-4  bg-gray-100 dark:bg-gray-800 p-4 rounded mb-4">
      <span className="border border-gray-300 dark:border-gray-600 rounded-full w-4 h-4 bg-transparent"></span>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="bg-transparent flex-1 font-josefin outline-none dark:text-gray-200 text-gray-700"
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default TodoInput;
