import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyWord, setKeyWord] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyWord(event.target.value);
  const onlyOnce = () => {
    console.log("only once");
  };
  useEffect(onlyOnce, []);
  useEffect(() => {
    if (keyWord !== "" && keyWord.length > 5) {
      console.log("keyWord");
    }
  }, [keyWord]);
  return (
    <div>
      <input
        value={keyWord}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
