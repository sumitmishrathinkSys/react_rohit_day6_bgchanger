import React, {use, useState} from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  let [count, setCount] = useState(0);
  function incrementNumber() {
    count = count + 1;
    setCount(count);
    console.log("count value is : " + count);
    // document.querySelector("h1").innerText = "Count is : " + count;
  }

  function decrementNumber() {
    count = count - 1;
    setCount(count);
    console.log("count value is : " + count);
    // document.querySelector("h1").innerText = "Count is : " + count;
    if (count < 0) {
      alert("Count is less than 0");
    }
  }

  return (
    <div className="first">
      <h1>Count is : {count}</h1>
      <button onClick={incrementNumber}>Increment</button>
      <button onClick={decrementNumber}>Decrement</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
