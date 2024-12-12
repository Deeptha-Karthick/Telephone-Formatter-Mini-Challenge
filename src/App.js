import "./styles.css";
import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    let displayValue;
    const value = e.target.value;
    let validInput = Array.from(value).filter(
      (el) => el !== " " && !isNaN(+el)
    );
    console.log("valid input", validInput);

    if (validInput.length > 3) {
      displayValue =
        "+(" +
        validInput.join("").slice(0, 3) +
        ") - " +
        validInput.join("").slice(3);
    } else {
      displayValue = validInput.join("");
    }

    setInput(displayValue);
  };

  return (
    <div className="App">
      <h1>Telephone Formatter</h1>
      <div className="input-container">
        <input
          type="tel"
          placeholder="Mobile Number"
          value={input}
          onChange={(e) => onChange(e)}
          maxLength={16}
        />
      </div>
      <p>+(123) - 4567890</p>
    </div>
  );
}
