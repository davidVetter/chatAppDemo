import { useEffect, useState } from "react";

const PREFIX = 'whats-app-clone-';

function getSavedValue(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue != null) return savedValue;

  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage(key, initialValue) {
    console.log('This is key in local: ', key);
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
    return getSavedValue(prefixedKey, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
}
