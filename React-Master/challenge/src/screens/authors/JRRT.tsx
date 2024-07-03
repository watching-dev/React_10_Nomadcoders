import { Link, Outlet } from "react-router-dom";

function JRRT() {
  return (
    <div>
      <h1>J.R.R.Tolkien</h1>
      <ul>
        <li>
          <Link to={"Lord_of_The_Rings_I"}>Lord of The Rings I</Link>
        </li>
        <li>
          <Link to={"Lord_of_The_Rings_II"}>Lord of The Rings II</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
export default JRRT;
