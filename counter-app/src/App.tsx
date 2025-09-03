import "./App.css";
import { CounterApp } from "./components/counter-app";
import { BooleanHook } from "./components/testUseBooleanHook";
function App() {
  return (
    <>
      <CounterApp />
      <BooleanHook />
    </>
  );
}

export default App;
