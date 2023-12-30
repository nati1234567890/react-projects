import React, { useEffect, useState } from "react";

function useLocalStorage(key, defaultvalue) {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue =
        JSON.parse(localStorage.getItem(key) || String(defaultvalue));
    } catch (error) {
      console.log(error);
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
