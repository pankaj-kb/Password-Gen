/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect } from "react";

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

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(passwordGenerator, [numAllowed, charAllowed, setPassword, length]);

  return (
    <>
      <div className="bg-slate-950 w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4">
        <h1 className="text-4xl text-center text-orange-500">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 text-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none bg-blue-500 text-orange-400 px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 text-white">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label>Numbers</label>
          </div>

          <div>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charAllowed"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Special Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
