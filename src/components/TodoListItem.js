import { useState } from 'react'
import cross from '../images/icon-cross.svg'
import check from '../images/icon-check.svg'

const TodoListItem = ({ todo, onDeleteTodo, onToggleComplete }) => {
  const [hoveredTodo, setHoveredTodo] = useState(null);


  const handleCheckboxChange = () => {
    onToggleComplete(todo.id)
  };

  const handleMouseEnter = (todoId) => {
    setHoveredTodo(todoId)
  }

  const  handleMouseLeave = () => {
    setHoveredTodo(null);
  }

  const checkbox = todo.completed ? (
    <span className="flex items-center justify-center rounded-full w-4 h-4 gradient-background">
      <img src={check} alt='check'/>
    </span>
  ) : (
    <span className="border border-gray-300 dark:border-gray-600 rounded-full w-4 h-4 bg-transparent"></span>
  )

  return (
    <div onMouseEnter={() => handleMouseEnter(todo.id)} onMouseLeave={handleMouseLeave} className="flex items-center space-x-4 border-b border-gray-300 dark:border-gray-600 p-4 cursor-pointer">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
          className="hidden"
        />
        {checkbox}
      </label>
      <span className={`bg-transparent flex-1 text-gray-600 dark:text-gray-400 font-josefin ${todo.completed && 'line-through opacity-50'} `}>{todo.text}</span>
      {hoveredTodo === todo.id &&  (<img src={cross} onClick={() => onDeleteTodo(todo.id)} className='w-3 h-3' alt="delete" />)}
    </div>
  )
}

export default TodoListItem