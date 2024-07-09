import { error } from "console";
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

interface IForm {
  todo1: string;
  todo2: string;
  todo3: string;
  todo4: string;
  todo5: string;
  todo6: string;
  extraError?: string;
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      todo1: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    setError(
      "extraError",
      {
        message: "Server offline",
      },
      {
        shouldFocus: true,
      }
    );
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("todo1", {
            required: "require",
            validate: (value) => (!value.includes("nico") ? "no allow" : true),
            pattern: /^[A-Za-z0-9._%+-]+@naver.com$/,
          })}
          placeholder="Write a to do1"
        />
        <span>{errors?.todo1?.message as string}</span>
        <input
          {...register("todo2", { required: "require", minLength: 10 })}
          placeholder="Write a to do2"
        />
        <span>{errors?.todo2?.message as string}</span>
        <input
          {...register("todo3", {
            required: "email require",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver",
            },
          })}
          placeholder="Write a to do3"
        />
        <span>{errors?.todo3?.message as string}</span>
        <input
          {...register("todo4", { required: "require" })}
          placeholder="Write a to do4"
        />
        <span>{errors?.todo4?.message as string}</span>
        <input
          {...register("todo5", { required: "require" })}
          placeholder="Write a to do5"
        />
        <span>{errors?.todo5?.message as string}</span>
        <input
          {...register("todo6", {
            required: "password is required",
            minLength: {
              value: 5,
              message: "short",
            },
          })}
          placeholder="Write a to do6"
        />
        <span>{errors?.todo6?.message as string}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
