/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let chars = "!@#$%^&*_-+=:;.?/|~";
    let nums = "0123456789";

    if (numAllowed) str += nums;
    if (charAllowed) str += chars;

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
  }, [length, numAllowed, charAllowed, setPassword]);

  return (
    <>
      <h1>Password Generator</h1>
      <h1>{length}</h1>
    </>
  );
}

export default App;
