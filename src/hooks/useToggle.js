import useLocalStorage from "./useLocalStorage";

function useToggle(key, initValue) {
  const [value, setValue] = useLocalStorage(key, initValue);

  function toggle(value) {
    setValue((prev) => {
      return typeof value === "boolean" ? value : !prev;
    });
  }

  return [value, toggle];
}

export default useToggle;
