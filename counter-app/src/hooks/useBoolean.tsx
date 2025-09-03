import { useState } from "react";

interface FinalValue {
  value: boolean;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export const useBoolean = (): FinalValue => {
  const [value, setValue] = useState(false);
  function setTrue() {
    setValue(true);
  }
  function setFalse() {
    setValue(false);
  }
  function toggle() {
    setValue((prev) => !prev);
  }
  return { value, setTrue, setFalse, toggle };
};
