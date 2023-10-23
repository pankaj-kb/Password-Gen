import { useState } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = () => {
    
  }

  return (
    <>
      <h1>Password Generator</h1>
      <h1>{length}</h1>
    </>
  );
}

export default App;
