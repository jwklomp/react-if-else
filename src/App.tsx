import React, { useState } from "react";
import "./styles.css";

import { IfElse, If, Else } from "./components/IfElse";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <IfElse condition={count % 2 === 0}>
        <If>
          <p>You clicked {count} times. This is an even amount.</p>
        </If>
        <Else>
          <IfElse condition={count < 6}>
            <If>
              <p>
                You clicked {count} times. This is an odd amount that is less
                then 6.
              </p>
            </If>
            <Else>
              <p>
                You clicked {count} times. This is an odd amount that is more
                then 6.
              </p>
            </Else>
          </IfElse>
        </Else>
      </IfElse>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
