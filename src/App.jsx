import React, { useState } from "react";
import { FaRegMoon, FaRegQuestionCircle } from "react-icons/fa";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const appendToDisplay = (value) => {
    setInputValue((prev) => (prev += value));
  };

  const clearDisplay = () => {
    setInputValue("");
  };

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  const showHelp = () => {
    // Do nothing
  };

  const calculate = () => {
    try {
      setInputValue(eval(inputValue));
    } catch (error) {
      setInputValue("Error!");
    }
  };

  return (
    <div className="flex w-full min-h-screen items-center justify-center bg-stone-400 p-12">
      <div className="flex flex-col w-86 rounded-2xl shadow-2xl bg-stone-300 dark:bg-stone-900">
        <input
          type="text"
          value={inputValue}
          placeholder="0"
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full bg-stone-500 dark:bg-stone-700 text-4xl font-semibold text-white/75 rounded-t-2xl focus:outline-none p-6"
          readOnly
        />

        <div className="flex flex-1 p-6 w-full h-full">
          <div className="grid grid-cols-4 w-full gap-4">
            <button
              onClick={() => toggleTheme()}
              className="flex cal-btn items-center justify-center text-white/75 bg-stone-600 dark:bg-stone-800"
            >
              <FaRegMoon size={20} />
            </button>
            <button
              onClick={() => showHelp()}
              className="flex cal-btn items-center justify-center text-white/75 bg-stone-600 dark:bg-stone-800"
            >
              <FaRegQuestionCircle size={20} />
            </button>
            <button
              onClick={() => appendToDisplay("%")}
              className="cal-btn text-white/75 bg-amber-500"
            >
              %
            </button>
            <button
              onClick={() => clearDisplay()}
              className="cal-btn text-white/75 bg-amber-500"
            >
              AC
            </button>
            <button onClick={() => appendToDisplay("7")} className="cal-btn">
              7
            </button>
            <button onClick={() => appendToDisplay("8")} className="cal-btn">
              8
            </button>
            <button onClick={() => appendToDisplay("9")} className="cal-btn">
              9
            </button>
            <button onClick={() => appendToDisplay("/")} className="cal-btn">
              /
            </button>
            <button onClick={() => appendToDisplay("4")} className="cal-btn">
              4
            </button>
            <button onClick={() => appendToDisplay("5")} className="cal-btn">
              5
            </button>
            <button onClick={() => appendToDisplay("6")} className="cal-btn">
              6
            </button>
            <button onClick={() => appendToDisplay("*")} className="cal-btn">
              *
            </button>
            <button onClick={() => appendToDisplay("1")} className="cal-btn">
              1
            </button>
            <button onClick={() => appendToDisplay("2")} className="cal-btn">
              2
            </button>
            <button onClick={() => appendToDisplay("3")} className="cal-btn">
              3
            </button>
            <button onClick={() => appendToDisplay("-")} className="cal-btn">
              -
            </button>
            <button onClick={() => appendToDisplay("0")} className="cal-btn">
              0
            </button>
            <button onClick={() => appendToDisplay(".")} className="cal-btn">
              .
            </button>
            <button onClick={() => calculate()} className="cal-btn">
              =
            </button>
            <button onClick={() => appendToDisplay("+")} className="cal-btn">
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
