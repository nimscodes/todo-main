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
    <span className="flex items-center justify-center border-gray-500 rounded-full w-5 h-5 gradient-background">
      <img src={check} alt='check'/>
    </span>
  ) : (
    <span className="border-2 border-gray-500 rounded-full w-5 h-5 bg-transparent"></span>
  )

  return (
    <div onMouseEnter={() => handleMouseEnter(todo.id)} onMouseLeave={handleMouseLeave} className="flex items-center space-x-4 border-b border-gray-400  p-3 md:p-3 cursor-pointer">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheckboxChange}
          className="hidden"
        />
        {checkbox}
      </label>
      <span className={`bg-transparent py-1 flex-1 text-gray-600 dark:text-gray-200 font-josefin ${todo.completed && 'line-through'} `}>{todo.text}</span>
      {hoveredTodo === todo.id &&  (<img src={cross} onClick={() => onDeleteTodo(todo.id)} className='w-4 h-4' alt="delete" />)}
    </div>
  )
}

export default TodoListItem