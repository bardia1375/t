import { useCallback, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState(1);

  const onClick = () => null;

  return (
    <div className="App">
      <button onClick={() => setState((prev) => ++prev)}>Increase</button>
      <DummyButton onClick={onClick} />
      {state && <div> {state}</div>}
    </div>
  );
}

const DummyButton = ({ onClick }) => {
  useEffect(() => {
    console.log("dummy Button component rerendered");
  }, [onClick]);

  return <button onClick={onClick}> Dummy Button </button>;
};
