import TodoListItem from './TodoListItem';
import { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = ({ todos, onDeleteTodo, onToggleComplete, onClearCompleted }) => {
  const [selected, setSelected] = useState('all');

  const options = [
    { label: 'All', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Completed', value: 'completed' },
  ];

  const handleSelect = (option) => {
    setSelected(option);
  };

  console.log(selected);

  const renderedOptions = options.map((option) => {
    return (
      <span
        onClick={() => handleSelect(option.value)}
        key={option.value}
        className={`hover:text-blue-500 dark:hover:text-white cursor-pointer ${
          selected === option.value && 'text-blue-500'
        }`}
      >
        {option.label}
      </span>
    );
  });

  const filteredTodos = todos.filter((todo) => {
    if (selected === 'completed') {
      return todo.completed;
    } else if (selected === 'active') {
      return !todo.completed;
    } else {
      return true; //'all' option show all todo
    }
  });

  const renderedTodos =  (
      <Droppable droppableId="todos">
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps}>
          {filteredTodos.map((todo, index) => (
            <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TodoListItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleComplete={onToggleComplete}
                  />
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
      
    );
  return (
    <div className="flex flex-col text-gray-500">
      <div className=' bg-gray-100 dark:bg-gray-700 rounded overflow-hidden shadow-2xl'>
        <div className="flex flex-col">{renderedTodos}</div>
        <div className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 shadow-2xl">
          <span className=" hover:text-white cursor-pointer ">
            {todos.length} items left
          </span>
          <div className="hidden md:flex items-center justify-center space-x-2">
            {renderedOptions}
          </div>
          <span onClick={onClearCompleted} className=" hover:text-white cursor-pointer">
            Clear Completed
          </span>
        </div>
      </div>

      <div className="md:hidden my-4 flex items-center justify-center space-x-2 p-3 text-lg bg-gray-100 dark:bg-gray-700 shadow-2xl rounded">
        {renderedOptions}
      </div>
    </div>
  );
};

export default TodoList;
