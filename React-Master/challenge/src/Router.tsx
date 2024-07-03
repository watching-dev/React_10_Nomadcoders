import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./screens/components/ErrorComponent";
import Followers from "./screens/authors/Followers";
import Author from "./screens/authors/Author";
import JKR from "./screens/authors/JKR";
import JRRT from "./screens/authors/JRRT";
import HP1 from "./screens/books/HP1";
import HP2 from "./screens/books/HP2";
import Chapters from "./screens/info/Chapters";
import Characters from "./screens/info/Characters";
import LR2 from "./screens/books/LR2";
import LR1 from "./screens/books/LR1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/J._K._Rowling",
        element: <JKR />,
        children: [
          {
            path: "Harry_Potter_I",
            element: <HP1 />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
          {
            path: "Harry_Potter_II",
            element: <HP2 />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
        ],
      },
      {
        path: "author/J._R._R._Tolkien",
        element: <JRRT />,
        children: [
          {
            path: "Lord_of_The_Rings_I",
            element: <LR1 />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
          {
            path: "Lord_of_The_Rings_II",
            element: <LR2 />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
        ],
      },
      // {
      //   path: "author/:slug",
      //   element: <Author />,
      //   children: [
      //     {
      //       path: "followers",
      //       element: <Followers />,
      //     },
      //   ],
      // },
      // { users에 출력하는게 있다면 아래처럼 해야함
      //   path: "users",
      //   element:,
      //   children:[
      //     path: ":userId",
      //     element: <User />
      //   ]
      // },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
