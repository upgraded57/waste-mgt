import { useState } from "react";
import "./input.css";
import { useEffect } from "react";

export default function Input({ id, placeholder, type, inputMode, setValue }) {
  const [inputField, setInputField] = useState(null);
  const [inputLabel, setInputLabel] = useState(null);

  useEffect(() => {
    setInputField(document.getElementById(id));
    setInputLabel(document.getElementById("label" + id));
  }, []);

  if (inputField && inputLabel) {
    inputField.onfocus = () => {
      inputLabel.classList.add("active");
    };

    inputField.onblur = () => {
      if (inputField.value.length < 1) {
        inputLabel.classList.remove("active");
      }
    };
  }

  const setInputValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="input">
      <label htmlFor={id} id={"label" + id}>
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        onChange={setInputValue}
        inputMode={inputMode}
      />
    </div>
  );
}
