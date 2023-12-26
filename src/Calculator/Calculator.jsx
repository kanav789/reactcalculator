import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  function number(e) {
    setInput(input + e.target.value);
  }
  function clear() {
    setInput("");
    setResult("");
  }
  function calculate() {
    setResult(eval(input));
  }
  return (
    <>
      <div className="container">
        <h1>
          Calculator <hr />
        </h1>
        <div className="input">
          {" "}
          <input type="text" readOnly value={input} placeholder="input" />
          <input type="text" readOnly value={result} placeholder="result" />
        </div>

        <div className="subcontainer">
          <ul>
            <button onClick={number} value="+">
              +
            </button>
            <button onClick={number} value="-">
              -
            </button>
            <button onClick={clear} value="C">
              C
            </button>
            <button onClick={calculate} value="=">
              =
            </button>
            <button onClick={number} value="%">
              %
            </button>
          </ul>
          <ul>
            <button onClick={number} value="1">
              1
            </button>
            <button onClick={number} value="2">
              2
            </button>
            <button onClick={number} value="3">
              3
            </button>
            <button onClick={number} value="4">
              4
            </button>
            <button onClick={number} value="*">
              *
            </button>
          </ul>
          <ul>
            <button onClick={number} value="5">
              5
            </button>
            <button onClick={number} value="6">
              6
            </button>
            <button onClick={number} value="7">
              7
            </button>
            <button onClick={number} value="8">
              8
            </button>
            <button onClick={number} value="/">
              /
            </button>
          </ul>
          <ul>
            <button onClick={number} value="9">
              9
            </button>
            <button onClick={number} value="0">
              0
            </button>
            <button onClick={number} value="00">
              00
            </button>
            <button onClick={number} value=".">
              .
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Calculator;
