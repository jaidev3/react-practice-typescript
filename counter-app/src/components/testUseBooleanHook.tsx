import { useBoolean } from "../hooks/useBoolean";

export const BooleanHook = () => {
  const { value, setTrue, setFalse, toggle } = useBoolean();

  return (
    <>
      <p>{value ? "enabled" : "disabled"}</p>
      <button onClick={setTrue}>Set True</button>
      <button onClick={setFalse}>Set False</button>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};
