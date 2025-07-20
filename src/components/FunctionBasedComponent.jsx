import { useState } from "react";
function FunctionBasedComponent() {
  const [min, setMin] = useState(0);
  function increment() {
    setMin(min + 1);
  }
  function decrement() {
    if (min > 0) {
      setMin(min - 1);
    }
  }
  return (
    <div id="fComp">
      <h2>This is Functional Based Component</h2>
      <div className="content">
        <button onClick={increment}>+</button>
        <h3>{min}</h3>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default FunctionBasedComponent;
