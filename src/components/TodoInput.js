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
    <form onSubmit={handleSubmit} className="flex items-center space-x-4  bg-gray-100 dark:bg-gray-700 p-2 md:p-3 rounded mb-4">
      <span className="border-2 border-gray-500 rounded-full w-5 h-5 bg-transparent"></span>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="bg-transparent py-1 flex-1 text-gray-500 font-josefin outline-none "
        placeholder="Create a new todo..."
      />
    </form>
  );
};

export default TodoInput;
