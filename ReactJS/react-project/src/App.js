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
  // useEffect 만드는 법 비교
  // useEffect(() => {
  //   console.log("created");
  //   return () => console.log("destroyed");
  // }, []);

  // useEffect(function () {
  //   console.log("created");
  //   return function () {
  //     console.log("destroyed");
  //   };
  // }, []);
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
