import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodo("");
    setToDos((currentArray) => [toDo, ...currentArray]); // -- 이거랑
    // toDo가 3이고 ...currentArray라면
    // [[0], [1], [2]] 이것과 같음 그냥 currentArray로 적으면 전체 배열을 그대로 넣어버림
    // [[Array]] ...이 없으면 이렇게 됨(초기값은 [] 니깐)
    // setToDos(function(currentArray){ // -- 이거랑 같음
    //   return []
    // } )
  };
  return (
    <div>
      <h1>My Todo ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="write!"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
