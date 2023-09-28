import { useState } from "react";
import "./input.css";
import { useEffect } from "react";

export default function Input({ id, placeholder, type }) {
  console.log(id);
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

  return (
    <div className="input">
      <label htmlFor={id} id={"label" + id}>
        {placeholder}
      </label>
      <input type={type} id={id} />
    </div>
  );
}
