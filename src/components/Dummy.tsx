import { useState } from "react";

const Dummy = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        counter: {counter}
      </button>
    </div>
  );
};

export default Dummy;
