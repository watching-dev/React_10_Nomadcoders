import { useState, useEffect } from "react";

function Hello() {
  function destroyed() {
    console.log("destroyed");
  }
  function created() {
    console.log("created");
    return destroyed;
  }
  useEffect(created, []);
  return <h1>hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "show"}</button>
    </div>
  );
}

export default App;
