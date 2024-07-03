import { Link, Outlet } from "react-router-dom";
import { authors } from "../../db";

function JKR() {
  return (
    <div>
      <h1>J.K.Rowling</h1>
      <ul>
        <li>
          <Link to={"Harry_Potter_I"}>Harry Potter I</Link>
        </li>
        <li>
          <Link to={"Harry_Potter_II"}>Harry Potter II</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default JKR;
