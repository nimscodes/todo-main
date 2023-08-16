import { useState } from 'react';

// Custom hook to manage local storage
function useLocalStorage(key, initialValue) {
  // Get initial value from local storage if available
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to manage the value
  const [value, setValue] = useState(initial);

  // Update local storage whenever the value changes
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Remove item from local storage and reset state
  const clearValue = () => {
    localStorage.removeItem(key);
    setValue(initialValue);
  };

  return [value, updateValue, clearValue];
}

export default useLocalStorage;
