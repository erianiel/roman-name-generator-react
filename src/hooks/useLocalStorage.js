import { useState, useEffect } from "react";

export function useLocalStorage(initialState, key) {
  // Initialize state from localStorage or use initialState
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  // Effect to update localStorage whenever value changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  // Return the state and the updater function
  return [value, setValue];
}
