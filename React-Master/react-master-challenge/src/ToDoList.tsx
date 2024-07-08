import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [toDo, setTodo] = useState("");
//   const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//         <button>Add</button>
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {};
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("to do1", { required: true })}
          placeholder="Write a to do1"
        />
        <input
          {...register("to do2", { required: true, minLength: 10 })}
          placeholder="Write a to do2"
        />
        <input
          {...register("to do3", { required: true })}
          placeholder="Write a to do3"
        />
        <input
          {...register("to do4", { required: true })}
          placeholder="Write a to do4"
        />
        <input
          {...register("to do5", { required: true })}
          placeholder="Write a to do5"
        />
        <input
          {...register("to do6", {
            required: "password is required",
            minLength: {
              value: 5,
              message: "short",
            },
          })}
          placeholder="Write a to do6"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
