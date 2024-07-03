import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./screens/Home";
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./screens/components/ErrorComponent";
import User from "./screens/users/User";

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
        path: "users/:userId",
        element: <User />,
      },
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
