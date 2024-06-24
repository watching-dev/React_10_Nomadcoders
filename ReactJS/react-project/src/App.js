import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const onChange = (event) => setTodo(event.target.value);
  return (
    <div>
      <form>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write!"
        />
      </form>
    </div>
  );
}

export default App;
