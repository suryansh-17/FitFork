import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="underline text-yellow-300 justify-center text-center text-7xl">
        FitFork
      </h1>
    </>
  );
}

export default App;
