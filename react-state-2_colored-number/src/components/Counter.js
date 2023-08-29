import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  function handleClickAdd() {
    setValue(value + 1);
    console.log("click", value);
  }
  function handleClickSub() {
    setValue(value - 1);
    console.log("click", value);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleClickAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleClickSub}
        >
          -
        </button>
      </div>
    </div>
  );
}
