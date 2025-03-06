import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import CopySvgIcon from "./components/copy";
import ArrowSvgIcon from "./components/arrow";
import TooWeakSvgIcon from "./components/too-weak";
import WeakSvgIcon from "./components/weak";
import MediumSvgIcon from "./components/medium";
import StrongSvgIcon from "./components/strong";
import EmptySvgIcon from "./components/empty";
import Square from "./components/square";

function App() {
  const [length, setLength] = useState(6);
  const [upperAllowed, setUpperAllowed] = useState(false);
  const [lowerAllowed, setLowerAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const getStrength = () => {
    const criteriaCount = [
      upperAllowed,
      lowerAllowed,
      numberAllowed,
      charAllowed,
    ].filter(Boolean).length;
    switch (criteriaCount) {
      case 1:
        return (
          <div className="flex items-center gap-2">
            TOO WEAK! <TooWeakSvgIcon />
          </div>
        );
      case 2:
        return (
          <div className="flex items-center gap-2">
            WEAK <WeakSvgIcon />
          </div>
        );
      case 3:
        return (
          <div className="flex items-center gap-2">
            MEDIUM <MediumSvgIcon />
          </div>
        );
      case 4:
        return (
          <div className="flex items-center gap-2">
            STRONG <StrongSvgIcon />
          </div>
        );
      default:
        return (
          <div className="flex items-center gap-2">
            <EmptySvgIcon />
          </div>
        );
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, upperAllowed, lowerAllowed, numberAllowed, charAllowed]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "";

    if (upperAllowed) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lowerAllowed) {
      str += "abcdefghijklmnopqrstuvwxyz";
    }

    if (numberAllowed) {
      str += "0123456789";
    }

    if (charAllowed) {
      str += "!§$%&/()=?*#ß";
    }

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, upperAllowed, lowerAllowed, numberAllowed, charAllowed]);

  /* const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }; */

  const [copied, setCopied] = useState(false);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="bg-[#18171F] w-screen flex items-center justify-center p-4">
      <div className="bg-[#18171F] text-center mx-auto">
      <header className="App-header text-2xl text-[#817D92]">
        Password Generator
      </header>
      <div className="mt-8 relative w-full">
        <input
          type="text"
          readOnly
          className="bg-[#24232C] w-full md:w-[540px] h-20 p-7 text-[32px]"
          placeholder="Password"
          value={password}
          ref={passwordRef}
        />
        <CopySvgIcon
          onClick={copyPasswordToClipboard}
          className="absolute top-7 right-7 cursor-copy"
        />
        {copied && (
          <span className="absolute top-7 right-20 text-[#A4FFAF]">COPIED</span>
        )}
        <div className="mt-6 p-7 bg-[#24232C]">
          <div className="range flex justify-between items-center">
            <p className="text-[18px] text-[#E6E5EA]">Character Length</p>
            <p className="text-[32px] text-[#A4FFAF]">{length}</p>
          </div>
          <input
            type="range"
            name="range"
            id="range"
            className="w-full neon-range"
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <div className="checkboxes flex flex-col gap-2 mt-5">
            <div className="flex gap-4">
              <input
                className="bg-transparent absolute opacity-0"
                type="checkbox"
                name="check"
                id="check"
                defaultChecked={upperAllowed}
                onChange={(e) => {
                  setUpperAllowed(e.target.checked);
                }}
              />
              <label
                className="text-lg flex items-center gap-4"
                htmlFor="check"
              >
                <Square checked={upperAllowed} />
                Include Uppercase Letters
              </label>
            </div>
            <div className="flex gap-4">
              <input
                className="bg-transparent absolute opacity-0"
                type="checkbox"
                name="lowercase"
                id="lowercase"
                defaultChecked={lowerAllowed}
                onChange={(e) => {
                  setLowerAllowed(e.target.checked);
                }}
              />
              <label
                className="text-lg flex items-center gap-4"
                htmlFor="lowercase"
              >
                <Square checked={lowerAllowed} />
                Include Lowercase Letters
              </label>
            </div>
            <div className="flex gap-4">
              <input
                className="bg-transparent absolute opacity-0"
                type="checkbox"
                name="numbers"
                id="numbers"
                defaultChecked={numberAllowed}
                onChange={(e) => {
                  setNumberAllowed(e.target.checked);
                }}
              />
              <label
                className="text-lg flex items-center gap-4"
                htmlFor="numbers"
              >
                <Square checked={numberAllowed} />
                Include Numbers
              </label>
            </div>
            <div className="flex gap-4">
              <input
                className="bg-transparent absolute opacity-0"
                type="checkbox"
                name="symbols"
                id="symbols"
                defaultChecked={charAllowed}
                onChange={(e) => {
                  setCharAllowed(e.target.checked);
                }}
              />
              <label
                className="text-lg flex items-center gap-4"
                htmlFor="symbols"
              >
                <Square checked={charAllowed} />
                Include Symbols
              </label>
            </div>
          </div>
          <div className="flex justify-between bg-[#18171F] strength px-8 py-4 mt-8">
            <p className="text-[#817D92] text-lg">STRENGTH</p>
            <div>
              <h3 className="text-2xl">{getStrength()}</h3>
            </div>
          </div>
          <button
            onClick={generatePassword}
            className="flex items-center justify-center gap-3 mt-8 w-full rounded-none uppercase bg-[#A4FFAF] text-[#24232C] p-4 text-lg cursor-pointer"
          >
            Generate
            <ArrowSvgIcon />
          </button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default App;
