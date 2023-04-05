import useLocalStorage from "./useLocalStorage";

function useInput(key, initValue) {
  const [value, setValue] = useLocalStorage(key, initValue);

  function resetUser() {
    return setValue(initValue);
  }

  const userAttribs = {
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, resetUser, userAttribs];
}

export default useInput;
