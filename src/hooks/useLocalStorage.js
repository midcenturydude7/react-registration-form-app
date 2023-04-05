import React from "react";

function getLocalValue(key, initValue) {
  // SSR Next.js
  if (typeof window === "undefined") return initValue;

  // if a value is already stored
  const localValue = JSON.parse(localStorage.getItem(key));
  if (localValue) return localValue;

  // return a result of a function
  if (initValue instanceof Function) return initValue;

  return initValue;
}

function useLocalStorage(key, initValue) {
  const [value, setValue] = React.useState(() => {
    return getLocalValue(key, initValue);
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

// potential fix for 'undefined' is not valid JSON syntax error
// const localValue = localStorage.getItem(key)
//   ? JSON.parse(localStorage.getItem(key))
//   : null;
// if (localValue) return localValue;
