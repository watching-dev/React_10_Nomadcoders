import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const onChange = (event) => setTodo(event.target.value);
  return (
    <div>
      <input
        value={toDo}
        onChange={onChange}
        type="text"
        placeholder="write!"
      />
    </div>
  );
}

export default App;
