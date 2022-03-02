import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const less = () => setAmount(amount - 1);
  const more = () => setAmount(amount + 1);
  return (
    <div data-testid="main">
      <p>How Many pieces do you want?</p>
      <button onClick={less} data-testid="lessbtn">
        -
      </button>
      <pre data-testid="currentAmount">{amount}</pre>
      <button onClick={more} data-testid="morebtn">
        +
      </button>
    </div>
  );
};

export default App;
