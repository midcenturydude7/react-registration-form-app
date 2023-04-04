import React from "react";

function useLocalStorage(key, initValue) {
  const [value, setValue] = React.useState(
    JSON.parse(localStorage.getItem(key)) || initValue
  );

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
