import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, etToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodo("");
    // state의 변수에는 절대 직접적으로 데이터를 넣지 않는다
    // toDos.push("")
    // toDos = ""
  };
  return (
    <div>
      <form onSubmit={{ onSubmit }}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write!"
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
