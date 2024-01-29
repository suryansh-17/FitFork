import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
