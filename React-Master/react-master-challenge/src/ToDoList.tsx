import { error } from "console";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

export enum SelectKeys {
  "GONE" = "GONE",
  "LIKE" = "LIKE",
  "DEL" = "DEL",
  "WANT" = "WANT",
}

export interface IToDo {
  id: number;
  text: string;
  filter: SelectKeys;
}

export const todoFilterState = atom<SelectKeys>({
  key: "todoFilterState",
  default: SelectKeys.WANT,
});

export const todoState = atom<IToDo[]>({
  key: "todoState",
  default: JSON.parse(localStorage.getItem("list") || "[]"),
});

export const toDoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);

    return [
      todos.filter((toDo) => toDo.filter === SelectKeys.GONE),
      todos.filter((toDo) => toDo.filter === SelectKeys.LIKE),
      todos.filter((toDo) => toDo.filter === SelectKeys.WANT),
    ];
  },
});

const ToDo = ({ text, filter, id }: IToDo) => {
  const setList = useSetRecoilState(todoState);
  const onClick = (setFilterKey: IToDo["filter"]) => {
    setList((prevToDos) => {
      console.log(prevToDos.map((tod) => console.log(tod)));
      if (setFilterKey === SelectKeys.DEL) {
        return prevToDos.filter((toDo) => toDo.id !== id);
      }

      return prevToDos.map((toDo) =>
        toDo.id === id ? { ...toDo, filter: setFilterKey } : toDo
      );
    });
  };

  return (
    <div>
      <span>{text}</span>
      {filter === SelectKeys.WANT && (
        <>
          <button onClick={() => onClick(SelectKeys.GONE)}>✅</button>
          <button onClick={() => onClick(SelectKeys.DEL)}>🗑️</button>
        </>
      )}
      {filter === SelectKeys.GONE && (
        <>
          <button onClick={() => onClick(SelectKeys.LIKE)}>👍</button>
          <button onClick={() => onClick(SelectKeys.WANT)}>❌</button>
        </>
      )}
      {filter === SelectKeys.LIKE && (
        <>
          <button onClick={() => onClick(SelectKeys.GONE)}>👎</button>
        </>
      )}
    </div>
  );
};

const CreateToDo = () => {
  const setToDoList = useSetRecoilState(todoState);
  const filterKey = useRecoilValue(todoFilterState);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>({
    defaultValues: {},
  });

  const handleValid = ({ name }: IForm) => {
    setToDoList((prevToDos) => [
      ...prevToDos,
      { text: name, id: Date.now(), filter: filterKey },
    ]);
    setValue("name", "");
  };

  return (
    <form
      style={{ display: "flex", flexDirection: "column", color: "white" }}
      onSubmit={handleSubmit(handleValid)}
    >
      <input
        {...register("name", {
          required: "required!!",
        })}
        placeholder="이름"
      />
      <span>{errors?.name?.message as string}</span>
      <button>가자!</button>
    </form>
  );
};

const Container = styled.div`
  padding: 10px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  color: white;
`;

interface IForm {
  name: string;
  extraError?: string;
}

function ToDoList() {
  const list = useRecoilValue(todoState);
  const [gone, like, want] = useRecoilValue(toDoSelector);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <Container>
      <Header>
        <Title>내가 가고싶은 나라들</Title>
      </Header>
      <CreateToDo />
      <div>
        <h2></h2>
        <div>
          {want.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </div>
        <h2>내가 가본 나라들</h2>
        <div>
          {gone.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </div>
        <h2>내가 좋아하는 나라들</h2>
        <div>
          {like.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default ToDoList;
