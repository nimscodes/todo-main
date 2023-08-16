import { useState, useEffect } from 'react';
import useDarkSide from './hooks/useDarkSide';
import moon from './images/icon-moon.svg';
import sun from './images/icon-sun.svg';
import bgDesktopDark from './images/bg-desktop-dark.jpg';
import bgDesktopLight from './images/bg-desktop-light.jpg';
import bgMobileDark from './images/bg-mobile-dark.jpg';
import bgMobileLight from './images/bg-mobile-light.jpg';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { DragDropContext } from 'react-beautiful-dnd';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [colorTheme, setTheme] = useDarkSide();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  const icon = colorTheme === 'light' ? sun : moon;

  const isSmallScreen = window.innerWidth <= 500;
  // const screenHeight = window.innerHeight;
  // const backgroundHeight = `${Math.round(screenHeight * 0.2)}px`;

  let backgroundImage;

  if (isSmallScreen) {
    if (colorTheme === 'light') {
      backgroundImage = bgMobileDark;
    } else {
      backgroundImage = bgMobileLight;
    }
  } else {
    if (colorTheme === 'light') {
      backgroundImage = bgDesktopDark;
    } else {
      backgroundImage = bgDesktopLight;
    }
  }

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '220px',
    backgroundColor: 'inherit',
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const onDeleteTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const clearCompleted  = () => {
    const updatedTodos = todos.filter(todo => !todo.completed);
    setTodos(updatedTodos)
  }

  const toggleComplete = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTodos = Array.from(todos);
    const [reorderedItem] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, reorderedItem);
    setTodos(updatedTodos);
  };

  return (
    <div className="h-screen bg-gray-200 dark:bg-gray-800 transition duration-200 font-josefin text-sm md:text-md">
      <div className="w-full flex flex-col items-center" style={containerStyle}>
        <div className="w-full md:w-1/2">
          <div className="mt-10 px-4">
            <div className="flex items-center justify-between py-3 my-5">
              <h1 className="text-white text-3xl font-semibold tracking-widest">
                TODO
              </h1>
              <div className="transition-opacity duration-500">
                <img
                  checked={darkMode}
                  onClick={toggleDarkMode}
                  src={icon}
                  alt="icon"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <TodoInput onAddTodo={addTodo} />
            <DragDropContext onDragEnd={onDragEnd}>
              <TodoList
                todos={todos}
                onDeleteTodo={onDeleteTodo}
                onToggleComplete={toggleComplete}
                onClearCompleted={clearCompleted}
              />
            </DragDropContext>

            <div className="flex justify-center items-center text-gray-500 mt-10">
              <span>Drag and drop to reorder list</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;